'use client';
import Link from 'next/link';
import { Button } from '@matrixzero/ui';
import { usePathname } from 'next/navigation';
import { useState } from 'react';
import { Brand } from './Studio';
import { Arrow, MenuIcon } from './Icons';
export default function Header(){const [open,setOpen]=useState(false);const path=usePathname();return <header className="site-header"><div className="shell header-inner"><Brand/><Button variant="secondary" className="menu-toggle" aria-expanded={open} aria-controls="navigation" trailingIcon={<MenuIcon open={open}/>} onClick={()=>setOpen(!open)}>{open?'Close':'Menu'}</Button><nav id="navigation" className={open?'nav open':'nav'} aria-label="Main navigation">{[{href:'/products',label:'Our work'},{href:'/about',label:'The studio'},{href:'/contact',label:'Get in touch'}].map(x=><Link key={x.href} href={x.href} aria-current={path===x.href?'page':undefined} onClick={()=>setOpen(false)}>{x.label}{x.href==='/contact'&&<Arrow/>}</Link>)}</nav></div></header>}
