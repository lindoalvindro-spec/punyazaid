import React, { useState, useRef, useEffect } from 'react';
import { ArrowRight, Sparkles, Maximize2, X, ChevronLeft, ChevronRight } from 'lucide-react';
import gsap from 'gsap';

export default function MemoryGallery({ onNext }) {
  const [idx, setIdx] = useState(0);
  const [direction, setDirection] = useState('next');
  const [lightbox, setLightbox] = useState(false);
  const containerRef = useRef(null);

  const exhibits = [
    { src: '/zaid 1.jpeg', tag: 'FOTO #01', title: 'Senyum Favorit Aku' },
    { src: '/zaid 2.jpeg', tag: 'FOTO #02', title: 'Ganteng Banget Pas Lagi Santai' },
    { src: '/zaid 3.jpeg', tag: 'FOTO #03', title: 'Momen Paling Gemas' },
    { src: '/zaid 4.jpeg', tag: 'FOTO #04', title: 'Tatapan Manisnya Zaid' },
    { src: '/zaid 5.jpeg', tag: 'FOTO #05', title: 'Foto Kesayangan Aku' },
    { src: '/zaid 6.jpeg', tag: 'FOTO #06', title: 'Pose Andalan' },
    { src: '/zaid 7.jpeg', tag: 'FOTO #07', title: 'Lucunya Kamu' },
    { src: '/zaid 8.jpeg', tag: 'FOTO #08', title: 'Tampan Maksimal' },
    { src: '/zaid 9.jpeg', tag: 'FOTO #09', title: 'Candid Terbaik' },
    { src: '/zaid 10.jpeg', tag: 'FOTO #10', title: 'Bikin Salting Terus' },
    { src: '/zaid 11.jpeg', tag: 'FOTO #11', title: 'Tetap Jadi Juara di Hatiku' },
  ];

  useEffect(() => {
    const tl = gsap.timeline();
    tl.fromTo('.gallery-header', 
      { opacity: 0, y: 20 }, 
      { opacity: 1, y: 0, duration: 0.8, ease: 'power2.out' }
    );
    tl.fromTo('.gallery-frame', 
      { opacity: 0, scale: 0.96, y: 25 }, 
      { opacity: 1, scale: 1, y: 0, duration: 0.9, ease: 'power3.out' },
      "-=0.4"
    );
    tl.fromTo('.gallery-controls',
      { opacity: 0 }, { opacity: 1, duration: 0.8 }, "-=0.2"
    );
  }, []);

  // GSAP Smooth Slide Animation (Kiri -> Kanan & Kanan -> Kiri)
  useEffect(() => {
    const photoEl = document.getElementById('gallery-photo');
    const tagEl = document.getElementById('gallery-tag-bar');
    
    if (photoEl) {
      const fromX = direction === 'next' ? 90 : -90;
      
      const tl = gsap.timeline();
      tl.fromTo(photoEl,
        { opacity: 0, x: fromX, scale: 0.96, filter: 'blur(6px)' },
        { opacity: 1, x: 0, scale: 1, filter: 'blur(0px)', duration: 0.55, ease: 'power2.out' }
      );

      if (tagEl) {
        tl.fromTo(tagEl,
          { opacity: 0, y: -6 },
          { opacity: 1, y: 0, duration: 0.35, ease: 'power2.out' },
          '-=0.35'
        );
      }
    }

    // Smoothly scroll active thumbnail into view
    const activeThumb = document.getElementById(`thumb-${idx}`);
    if (activeThumb) {
      activeThumb.scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'center' });
    }
  }, [idx, direction]);

  // Auto-play timer
  useEffect(() => {
    const timer = setInterval(() => {
      setDirection('next');
      setIdx((prev) => (prev + 1) % exhibits.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [exhibits.length]);

  const current = exhibits[idx];

  const prevSlide = () => {
    setDirection('prev');
    setIdx((prev) => (prev === 0 ? exhibits.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setDirection('next');
    setIdx((prev) => (prev + 1) % exhibits.length);
  };

  const selectThumbnail = (i) => {
    if (i === idx) return;
    setDirection(i > idx ? 'next' : 'prev');
    setIdx(i);
  };

  return (
    <div className="stage stage--scroll" ref={containerRef}>
      {/* Flower Chain Decoration */}
      <img src="/Untitled - July 29, 2026 at 22.02.49.png" alt="Decoration" style={{
        width: '100%', maxWidth: 280, maxHeight: 140, objectFit: 'contain', 
        marginBottom: 4, marginTop: -20, opacity: 0.95, pointerEvents: 'none',
        filter: 'drop-shadow(0 4px 12px rgba(212,69,108,0.25))'
      }} onError={(e) => e.target.style.display = 'none'} />

      {/* Museum Title */}
      <div className="gallery-header" style={{ textAlign: 'center', marginBottom: 24, width: '100%', maxWidth: 390, position: 'relative', zIndex: 2 }}>
        <div style={{
          display: 'inline-flex', alignItems: 'center', gap: 6,
          padding: '5px 14px', borderRadius: 20, background: 'rgba(220, 38, 38, 0.2)',
          border: '1px solid rgba(239, 68, 68, 0.35)', marginBottom: 10
        }}>
          <Sparkles size={13} color="#ef4444" />
          <span style={{ fontSize: '0.72rem', fontWeight: 700, color: '#f87171', letterSpacing: 1.5, textTransform: 'uppercase' }}>
            Koleksi Kenangan
          </span>
        </div>
        <h1 style={{
          fontFamily: 'var(--font-display)', fontSize: '2.2rem', color: '#ffffff',
          lineHeight: 1.15, marginBottom: 6, letterSpacing: '-0.5px'
        }}>
          Galeri Foto Zaid
        </h1>
      </div>

      {/* Main Exhibition Frame */}
      <div className="gallery-frame" style={{
        width: '100%', maxWidth: 370, padding: 16, marginBottom: 24,
        background: 'linear-gradient(180deg, #1c1519 0%, #121014 100%)', borderRadius: 28,
        border: '1.5px solid rgba(220, 38, 38, 0.35)',
        boxShadow: '0 20px 50px rgba(0, 0, 0, 0.7), 0 2px 10px rgba(220, 38, 38, 0.2)',
        position: 'relative',
      }}>
        {/* Top Tag Bar */}
        <div id="gallery-tag-bar" style={{
          display: 'flex', justifyContent: 'space-between', alignItems: 'center',
          marginBottom: 12, padding: '0 4px'
        }}>
          <span style={{
            fontSize: '0.7rem', fontWeight: 800, color: '#ef4444',
            letterSpacing: 1.5, textTransform: 'uppercase'
          }}>
            {current.tag}
          </span>
          <span style={{
            fontFamily: 'var(--font-display)', fontSize: '1.15rem', color: '#ffffff',
            fontWeight: 700
          }}>
            {current.title}
          </span>
        </div>

        {/* Photo Container */}
        <div style={{
          position: 'relative', width: '100%', aspectRatio: '3/4', 
          borderRadius: 20, overflow: 'hidden', background: '#121014',
          boxShadow: 'inset 0 0 20px rgba(0,0,0,0.5)',
          border: '1px solid rgba(220, 38, 38, 0.2)',
        }}>
          <img
            id="gallery-photo"
            key={idx}
            src={current.src}
            alt={current.title}
            style={{ 
              width: '100%', height: '100%', objectFit: 'cover',
              transformOrigin: 'center center'
            }}
            onError={(e) => { e.target.src = '/zaid 1.jpeg'; }}
          />

          {/* Lightbox Inspect Trigger */}
          <button
            onClick={() => setLightbox(true)}
            style={{
              position: 'absolute', top: 12, right: 12, width: 36, height: 36,
              borderRadius: '50%', background: 'rgba(20, 18, 24, 0.85)',
              backdropFilter: 'blur(8px)', border: '1px solid rgba(220,38,38,0.4)', color: '#f87171',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              cursor: 'pointer', boxShadow: '0 4px 12px rgba(0,0,0,0.4)',
              transition: 'transform 0.15s ease'
            }}
            onPointerDown={(e) => e.currentTarget.style.transform = 'scale(0.9)'}
            onPointerUp={(e) => e.currentTarget.style.transform = 'scale(1)'}
          >
            <Maximize2 size={16} />
          </button>

          {/* Nav Arrows overlay */}
          <button
            onClick={prevSlide}
            style={{
              position: 'absolute', left: 10, top: '50%', transform: 'translateY(-50%)',
              width: 34, height: 34, borderRadius: '50%', background: 'rgba(20, 18, 24, 0.8)',
              backdropFilter: 'blur(6px)', border: '1px solid rgba(220,38,38,0.4)', color: '#ffffff',
              display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer',
              boxShadow: '0 4px 12px rgba(0,0,0,0.4)'
            }}
          >
            <ChevronLeft size={18} />
          </button>
          <button
            onClick={nextSlide}
            style={{
              position: 'absolute', right: 10, top: '50%', transform: 'translateY(-50%)',
              width: 34, height: 34, borderRadius: '50%', background: 'rgba(20, 18, 24, 0.8)',
              backdropFilter: 'blur(6px)', border: '1px solid rgba(220,38,38,0.4)', color: '#ffffff',
              display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer',
              boxShadow: '0 4px 12px rgba(0,0,0,0.4)'
            }}
          >
            <ChevronRight size={18} />
          </button>
        </div>
      </div>

      {/* Thumbnail Strip */}
      <div className="gallery-controls" style={{
        display: 'flex', gap: 8, justifyContent: 'flex-start', marginBottom: 28,
        maxWidth: 370, width: '100%', overflowX: 'auto', padding: '6px 4px',
        scrollbarWidth: 'thin'
      }}>
        {exhibits.map((item, i) => (
          <div
            key={i}
            id={`thumb-${i}`}
            onClick={() => selectThumbnail(i)}
            style={{
              width: i === idx ? 48 : 36, height: 48, borderRadius: 10, overflow: 'hidden',
              border: i === idx ? '2px solid #ef4444' : '1.5px solid transparent',
              opacity: i === idx ? 1 : 0.6,
              transition: 'all 0.3s cubic-bezier(0.25, 1, 0.5, 1)', cursor: 'pointer',
              flexShrink: 0, boxShadow: i === idx ? '0 4px 12px rgba(220,38,38,0.5)' : 'none',
            }}
          >
            <img src={item.src} alt="" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
          </div>
        ))}
      </div>

      {/* Lightbox Modal */}
      {lightbox && (
        <div
          onClick={() => setLightbox(false)}
          style={{
            position: 'fixed', inset: 0, background: 'rgba(8, 6, 10, 0.95)',
            backdropFilter: 'blur(16px)', zIndex: 9999, display: 'flex',
            alignItems: 'center', justifyContent: 'center', padding: 20, cursor: 'pointer'
          }}
        >
          <button
            onClick={() => setLightbox(false)}
            style={{
              position: 'absolute', top: 20, right: 20, width: 42, height: 42,
              borderRadius: '50%', background: 'rgba(255,255,255,0.15)', border: 'none',
              color: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center',
              cursor: 'pointer'
            }}
          >
            <X size={22} />
          </button>

          <div style={{ maxWidth: '90vw', maxHeight: '85vh', borderRadius: 20, overflow: 'hidden', border: '2px solid rgba(239,68,68,0.6)', boxShadow: '0 20px 60px rgba(0,0,0,0.8)' }}>
            <img src={current.src} alt={current.title} style={{ width: '100%', height: '100%', objectFit: 'contain', maxHeight: '80vh' }} />
            <div style={{ padding: '12px', background: 'rgba(20,10,15,0.92)', textAlign: 'center', color: '#f87171', fontFamily: 'var(--font-display)', fontSize: '1.2rem' }}>
              {current.tag}: {current.title}
            </div>
          </div>
        </div>
      )}

      {/* Next Button */}
      <button className="gallery-controls btn-primary" onClick={onNext} style={{ width: '100%', maxWidth: 370 }}>
        Buka Kartu Ucapannya <ArrowRight size={16} />
      </button>
    </div>
  );
}
