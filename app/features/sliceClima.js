import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const API_KEY = '9e564ab9e17e2196f13608b3097d03c0'; 

export const buscarClima = createAsyncThunk(
  'clima/buscarClima',
  async (cidade) => {
    const resposta = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${cidade}&units=metric&appid=${API_KEY}`);
    return resposta.data;
  }
);

const sliceClima = createSlice({
  name: 'clima',
  initialState: {
    dadosClima: null,
    status: 'idle',
    erro: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(buscarClima.pending, (estado) => {
        estado.status = 'carregando';
      })
      .addCase(buscarClima.fulfilled, (estado, acao) => {
        estado.status = 'sucedido';
        estado.dadosClima = acao.payload;
      })
      .addCase(buscarClima.rejected, (estado, acao) => {
        estado.status = 'falhou';
        estado.erro = acao.error.message;
      });
  },
});

export default sliceClima.reducer;
