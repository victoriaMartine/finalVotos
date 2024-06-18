import "dotenv/config"

const PORT = process.env.PORT
const MODE = process.env.MODE

export  {PORT, MODE}
export const DISTRICTS = ['zona1', 'zona2', 'zona3', 'zona4'];
export const CANDIDATES = ['candidatoA', 'candidatoB', 'candidatoC', 'en blanco']