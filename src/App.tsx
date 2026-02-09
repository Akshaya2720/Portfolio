import { lazy, Suspense, useEffect, useRef } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";

const CharacterModel = lazy(() => import("./components/Character"));
const MainContainer = lazy(() => import("./components/MainContainer"));
const MyWorks = lazy(() => import("./pages/MyWorks"));
const Play = lazy(() => import("./pages/Play"));
import { LoadingProvider } from "./context/LoadingProvider";
import gsap from 'gsap';

const App = () => {
    const cursorRef = useRef(null)
    const glowRef = useRef(null)

    useEffect(() => {
        const moveCursor = (e) => {
            gsap.to(cursorRef.current, {
                x: e.clientX,
                y: e.clientY,
                duration: 0.1,
                ease: "power2.out"
            })
            gsap.to(glowRef.current, {
                x: e.clientX,
                y: e.clientY,
                duration: 0.5,
                ease: "power2.out"
            })
        }

        window.addEventListener('mousemove', moveCursor)
        return () => window.removeEventListener('mousemove', moveCursor)
    }, [])

    return (
        <BrowserRouter>
            <div ref={cursorRef} className="custom-cursor" />
            <div ref={glowRef} className="cursor-glow" />
            <Routes>
                <Route
                    path="/"
                    element={
                        <LoadingProvider>
                            <Suspense>
                                <MainContainer>
                                    <Suspense>
                                        <CharacterModel />
                                    </Suspense>
                                </MainContainer>
                            </Suspense>
                        </LoadingProvider>
                    }
                />
                <Route
                    path="/myworks"
                    element={
                        <Suspense fallback={<div>Loading...</div>}>
                            <MyWorks />
                        </Suspense>
                    }
                />
                <Route
                    path="/play"
                    element={
                        <Suspense fallback={<div>Loading...</div>}>
                            <Play />
                        </Suspense>
                    }
                />
            </Routes>
        </BrowserRouter>
    );
};

export default App;
