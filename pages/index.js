import { useDispatch, useSelector } from 'react-redux';
import { useState } from 'react';
import { buscarClima } from '../app/features/sliceClima';

export default function Home() {
  const [cidade, setCidade] = useState('');
  const dispatch = useDispatch();
  const clima = useSelector((estado) => estado.clima);

  const handleBuscarClima = () => {
    if (cidade !== '') {
      dispatch(buscarClima(cidade));
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2 bg-black text-white">
      <h1 className="text-4xl font-bold mb-4">App de Clima</h1>
      <input
        type="text"
        value={cidade}
        onChange={(e) => setCidade(e.target.value)}
        placeholder="Digite o nome da cidade"
        className="mb-4 p-2 border border-gray-600 rounded bg-gray-800 text-white"
      />
      <button
        onClick={handleBuscarClima}
        className="p-2 bg-gray-600 text-white rounded hover:bg-gray-500"
      >
        Ver Clima
      </button>
      {clima.status === 'carregando' && <p className="mt-4">Carregando...</p>}
      {clima.status === 'falhou' && <p className="mt-4">Erro: {clima.erro}</p>}
      {clima.dadosClima && (
        <div className="mt-4 p-4 border border-gray-600 rounded bg-gray-800">
          <h2 className="text-2xl font-bold">
            {clima.dadosClima.name}, {clima.dadosClima.sys.country}
          </h2>
          <p>Temperatura: {clima.dadosClima.main.temp} °C</p>
          <p>Condição: {clima.dadosClima.weather[0].description}</p>
        </div>
      )}
    </div>
  );
}
