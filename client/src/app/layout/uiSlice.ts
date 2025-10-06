import { createSlice } from "@reduxjs/toolkit";

const getIntiatalDarkMode = () => {
  const storedDarkMode = localStorage.getItem('darkMode');
  return storedDarkMode ? JSON.parse(storedDarkMode) : true;
}

export const uiSlice = createSlice({
    name: 'ui',
    initialState: {
        isLoding: false,
        darkMode: getIntiatalDarkMode()
    },
    reducers: {
        startLoading: (state) => {
            state.isLoding = true;
        },
        stopLoading: (state) => {
            state.isLoding = false;
        },
        setDarkMode: (state) => {
            localStorage.setItem('darkMode', JSON.stringify(!state.darkMode));
            state.darkMode = !state.darkMode;
        }
    }
});

export const { startLoading, stopLoading, setDarkMode } = uiSlice.actions;