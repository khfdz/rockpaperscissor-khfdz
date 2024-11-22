import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  score: 0, // Inisialisasi score
};

const scoreSlice = createSlice({
  name: 'score', // Nama slice
  initialState,
  reducers: {
    incrementScore: (state, action) => {
      state.score += action.payload; // Fungsi untuk menambah score
    },
    decrementScore: (state) => {
      state.score -= 1; // Fungsi untuk mengurangi score
    },
    resetScore: (state) => {
      state.score = 0; // Fungsi untuk mereset score
    },
  },
});

// Ekspor actions
export const { incrementScore, decrementScore, resetScore } = scoreSlice.actions;

// Ekspor reducer untuk digunakan di store
export default scoreSlice.reducer;
