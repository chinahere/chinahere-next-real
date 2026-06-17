import Navbar from "@/components/Navbar";
import './globals.css';
import type { Metadata } from 'next';
export const metadata: Metadata = {title:'ChinaHere | الصين هنا',description:'حلول البحث عن الموردين والاستيراد والشحن من الصين إلى السعودية والسودان والخليج',openGraph:{title:'ChinaHere | Sourcing & Supply Chain Solutions',description:'استورد من الصين بثقة وبدون مخاطر',type:'website'}};
export default function RootLayout({children}:{children:React.ReactNode}){return <html lang="ar" dir="rtl"><body>{children}</body></html>}
