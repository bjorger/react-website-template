import { Box } from "@mui/material";
import React from "react";
import styled from "styled-components";

interface LayoutProps {
    children?: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
    return <Container>{children}</Container>;
};

export default Layout;

const Container = styled.div`
    display: grid;
    grid-template-columns: repeat(24, 1fr);
    min-height: 100vh;

    @keyframes gradient {
        0% {
            background-position: 0% 50%;
        }
        50% {
            background-position: 100% 50%;
        }
        100% {
            background-position: 0% 50%;
        }
    }
`;
