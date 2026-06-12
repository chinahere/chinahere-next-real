import type { Config } from 'tailwindcss';
const config: Config = {content:['./app/**/*.{js,ts,jsx,tsx}','./components/**/*.{js,ts,jsx,tsx}'],theme:{extend:{colors:{navy:'#07111f',navy2:'#0B132B',gold:'#D4AF37',gold2:'#f2c96b'},boxShadow:{gold:'0 0 35px rgba(212,175,55,.22)'}}},plugins:[]};
export default config;
