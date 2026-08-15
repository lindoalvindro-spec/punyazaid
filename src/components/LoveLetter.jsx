import React, { useState, useRef, useEffect } from 'react';
import { Heart, ArrowRight, Sparkles, Quote } from 'lucide-react';
import gsap from 'gsap';

// ─── 💌 Tab 1: Surat Content (Sweet & Manja Birthday Letter) ───
function LetterTab() {
  const containerRef = useRef(null);
  const itemsRef = useRef([]);

  useEffect(() => {
    const tl = gsap.timeline();
    tl.fromTo(containerRef.current,
      { opacity: 0, scale: 0.96, y: 15 },
      { opacity: 1, scale: 1, y: 0, duration: 0.45, ease: 'back.out(1.2)' }
    );
    tl.fromTo(itemsRef.current.filter(Boolean),
      { opacity: 0, y: 12 },
      { opacity: 1, y: 0, stagger: 0.08, duration: 0.45, ease: 'power2.out' },
      "-=0.2"
    );
  }, []);

  return (
    <div ref={containerRef} style={{
      background: 'linear-gradient(170deg, #1f161b 0%, #131014 100%)',
      padding: '24px 20px', borderRadius: 24,
      border: '1.5px solid rgba(220, 38, 38, 0.35)', lineHeight: 1.85,
      fontFamily: 'var(--font-body)', fontSize: '0.88rem', color: '#ffffff',
      maxHeight: '52vh', overflowY: 'auto',
      boxShadow: '0 12px 36px rgba(0, 0, 0, 0.6), inset 0 0 25px rgba(220, 38, 38, 0.08)',
      position: 'relative',
    }}>
      {/* Tilted Polaroid Photo with Decorative Tape */}
      <div ref={(el) => itemsRef.current.push(el)} style={{
        float: 'right', width: 98, height: 98, marginLeft: 14, marginBottom: 10,
        borderRadius: 18, overflow: 'hidden', border: '3px solid rgba(220, 38, 38, 0.6)',
        boxShadow: '0 10px 28px rgba(0, 0, 0, 0.6)',
        transform: 'rotate(4deg)', position: 'relative',
      }}>
        {/* Subtle Washi Tape Ornament */}
        <div style={{
          position: 'absolute', top: -6, left: '50%', transform: 'translateX(-50%)',
          width: 36, height: 12, background: 'rgba(220, 38, 38, 0.6)',
          borderRadius: 2, backdropFilter: 'blur(4px)', zIndex: 10
        }} />
        <img src="/zaid 5.jpeg" alt="Zaid" style={{ width: '100%', height: '100%', objectFit: 'cover' }}
          onError={(e) => { e.target.src = '/zaid 5.jpeg'; }} />
      </div>

      {/* Opening Badge Header */}
      <div ref={(el) => itemsRef.current.push(el)} style={{ marginBottom: 10 }}>
        <div style={{
          display: 'inline-flex', alignItems: 'center', gap: 6,
          padding: '4px 14px', borderRadius: 20,
          background: 'rgba(220, 38, 38, 0.22)',
          border: '1px solid rgba(239, 68, 68, 0.4)', marginBottom: 8
        }}>
          <Sparkles size={13} color="#ef4444" />
          <span style={{ fontFamily: 'var(--font-cute)', fontSize: '0.8rem', fontWeight: 700, color: '#f87171', letterSpacing: '0.5px' }}>
            HAPPY BIRTHDAY, ZAID
          </span>
        </div>

        {/* Cursive Salutation */}
        <h3 style={{
          fontFamily: 'var(--font-display)', fontSize: '1.7rem', color: '#ef4444',
          lineHeight: 1.2, margin: '4px 0 10px 0'
        }}>
          Halo Zaid kesayangan aku,
        </h3>
      </div>

      {/* Paragraph 1 */}
      <p ref={(el) => itemsRef.current.push(el)} style={{ marginBottom: 14, fontWeight: 500, letterSpacing: '0.2px', color: '#f1f5f9' }}>
        Selamat ulang tahun yaa sayang! Hari ini hari spesial kamu, dan aku mau bilang kalau aku bersyukur banget bisa punya kamu di hidup aku. Makasih ya udah selalu sabar, selalu ada buat aku, dan bikin hari-hari aku jauh lebih hangat dan seru.
      </p>

      {/* Paragraph 2 */}
      <p ref={(el) => itemsRef.current.push(el)} style={{ marginBottom: 16, fontWeight: 500, color: '#f1f5f9' }}>
        Walaupun aku kadang suka manja atau ngambek ga jelas, kamu tetep sabar ngadepin aku. Jangan pernah bosen ya sama manjanya aku, tetep jadi Zaid yang selalu bikin aku nyaman dan jatuh cinta tiap hari.
      </p>

      {/* Romantic Quote Highlight Box */}
      <div ref={(el) => itemsRef.current.push(el)} style={{
        margin: '18px 0',
        padding: '16px 18px',
        borderRadius: 20,
        background: 'linear-gradient(135deg, rgba(38, 12, 18, 0.9) 0%, rgba(20, 8, 14, 0.9) 100%)',
        border: '1.5px solid rgba(220, 38, 38, 0.45)',
        boxShadow: '0 8px 24px rgba(0, 0, 0, 0.5), inset 0 0 15px rgba(220, 38, 38, 0.1)',
        position: 'relative',
        overflow: 'hidden',
      }}>
        <div style={{ display: 'flex', gap: 10, alignItems: 'flex-start' }}>
          <Quote size={22} color="#ef4444" style={{ transform: 'rotate(180deg)', flexShrink: 0, marginTop: 2, opacity: 0.9 }} />
          <p style={{
            fontFamily: 'var(--font-body)',
            fontSize: '0.86rem',
            fontStyle: 'italic',
            color: '#fecaca',
            lineHeight: 1.75,
            fontWeight: 600,
          }}>
            "Kamu itu tempat paling nyaman buat aku cerita apa aja. Semoga hari ini dan seterusnya, kamu selalu bahagia sama aku."
          </p>
        </div>
      </div>

      {/* Paragraph 3 */}
      <p ref={(el) => itemsRef.current.push(el)} style={{ marginBottom: 14, fontWeight: 500, color: '#f1f5f9' }}>
        Semoga semua impian dan apa yang lagi kamu perjuangin bisa tercapai satu per satu. Apapun yang terjadi, aku bakal selalu ada di samping kamu buat semangatin kamu terus.
      </p>

      {/* Handwritten Sign-Off Card */}
      <div ref={(el) => itemsRef.current.push(el)} style={{
        marginTop: 22, padding: '16px 18px',
        background: 'linear-gradient(135deg, #241419 0%, #151014 100%)',
        borderRadius: 20, border: '1.5px solid rgba(220, 38, 38, 0.4)',
        textAlign: 'center', boxShadow: '0 6px 20px rgba(0, 0, 0, 0.5)',
        clear: 'both',
      }}>
        <p style={{
          fontFamily: 'var(--font-display)', fontSize: '1.4rem', color: '#ef4444',
          lineHeight: 1.35, margin: 0, fontWeight: 700
        }}>
          Selamat ulang tahun, kesayangan aku! Love you so much!
        </p>
      </div>
    </div>
  );
}

// ─── ✨ Tab 2: Impian & Harapan Content ───
function ImpianTab() {
  const containerRef = useRef(null);
  const itemsRef = useRef([]);

  useEffect(() => {
    const tl = gsap.timeline();
    tl.fromTo(containerRef.current,
      { opacity: 0, scale: 0.95, y: 18 },
      { opacity: 1, scale: 1, y: 0, duration: 0.5, ease: 'back.out(1.2)' }
    );
    tl.fromTo(itemsRef.current.filter(Boolean),
      { opacity: 0, y: 25, scale: 0.95 },
      { opacity: 1, y: 0, scale: 1, stagger: 0.14, duration: 0.55, ease: 'back.out(1.4)' },
      "-=0.25"
    );
  }, []);

  const dreams = [
    {
      icon: '✈️',
      badge: 'HARAPAN 01',
      title: 'Sering Jalan & Ketemu',
      text: 'Bisa lebih sering ketemu, jalan berdua, jajan enak bareng, dan ngobrol lama tanpa perlu buru-buru pamit.',
      gradient: 'linear-gradient(135deg, rgba(220,38,38,0.35), rgba(127,29,29,0.45))',
    },
    {
      icon: '🌟',
      badge: 'HARAPAN 02',
      title: 'Selalu Ada Buat Kamu',
      text: 'Aku mau selalu jadi orang pertama yang dengerin cerita, keluh kesah, dan pencapaian hebat kamu setiap hari.',
      gradient: 'linear-gradient(135deg, rgba(239,68,68,0.35), rgba(153,27,27,0.45))',
    },
    {
      icon: '📸',
      badge: 'HARAPAN 03',
      title: 'Bikin Momen Lucu Bareng',
      text: 'Bikin foto-foto random baru, ketawa bareng hal-hal sepele, dan lewatin hari-hari seru bareng kamu.',
      gradient: 'linear-gradient(135deg, rgba(220,38,38,0.35), rgba(127,29,29,0.45))',
    },
    {
      icon: '💍',
      badge: 'HARAPAN 04',
      title: 'Tetap Bareng Terus',
      text: 'Mau terus sama kamu, saling jaga, saling ngerti, dan saling sayang sampai nanti-nanti.',
      gradient: 'linear-gradient(135deg, rgba(239,68,68,0.35), rgba(153,27,27,0.45))',
    },
  ];

  return (
    <div ref={containerRef} style={{
      background: 'linear-gradient(150deg, #1f161b 0%, #131014 100%)',
      borderRadius: 22, border: '1.5px solid rgba(220, 38, 38, 0.35)',
      padding: '22px 18px', display: 'flex', flexDirection: 'column', gap: 14,
      boxShadow: '0 10px 32px rgba(0, 0, 0, 0.6), inset 0 0 20px rgba(220, 38, 38, 0.08)',
    }}>
      <div style={{ textAlign: 'center', marginBottom: 4 }}>
        <Sparkles size={20} color="#ef4444" style={{ marginBottom: 4 }} />
        <h4 style={{
          fontFamily: 'var(--font-display)', fontSize: '1.45rem', color: '#ffffff',
          lineHeight: 1.2
        }}>Harapan Kecil Kita</h4>
      </div>

      {dreams.map((item, i) => (
        <div
          key={i}
          ref={(el) => (itemsRef.current[i] = el)}
          style={{
            background: '#16141a',
            borderRadius: 18,
            padding: '16px 16px',
            border: '1.5px solid rgba(220, 38, 38, 0.3)',
            boxShadow: '0 4px 18px rgba(0, 0, 0, 0.4)',
            position: 'relative',
            overflow: 'hidden',
            transition: 'transform 0.2s ease',
            cursor: 'pointer',
          }}
          onPointerDown={(e) => { e.currentTarget.style.transform = 'scale(0.97)'; }}
          onPointerUp={(e) => { e.currentTarget.style.transform = 'scale(1)'; }}
          onPointerLeave={(e) => { e.currentTarget.style.transform = 'scale(1)'; }}
        >
          <div style={{ display: 'flex', gap: 14, alignItems: 'flex-start' }}>
            <div style={{
              width: 44, height: 44, flexShrink: 0, borderRadius: 14,
              background: item.gradient,
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              border: '1px solid rgba(239, 68, 68, 0.4)', fontSize: '1.2rem',
              boxShadow: '0 4px 12px rgba(220, 38, 38, 0.25)'
            }}>
              {item.icon}
            </div>

            <div style={{ flex: 1 }}>
              <div style={{
                fontSize: '0.62rem', fontWeight: 800, textTransform: 'uppercase',
                letterSpacing: 1.2, color: '#f87171', opacity: 0.9,
                marginBottom: 2
              }}>
                {item.badge}
              </div>
              <h4 style={{
                fontFamily: 'var(--font-display)', color: '#ffffff',
                fontSize: '1.2rem', marginBottom: 4, lineHeight: 1.25,
              }}>{item.title}</h4>
              <p style={{ fontSize: '0.79rem', color: '#e2e8f0', lineHeight: 1.55, fontWeight: 400 }}>
                {item.text}
              </p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

// ─── 🎁 Tab 3: Doa & Pesan Birthday Wishes ───
function WishesTab() {
  const containerRef = useRef(null);
  const itemsRef = useRef([]);

  useEffect(() => {
    const tl = gsap.timeline();
    tl.fromTo(containerRef.current,
      { opacity: 0, scale: 0.95, y: 20 },
      { opacity: 1, scale: 1, y: 0, duration: 0.5, ease: 'back.out(1.2)' }
    );
    tl.fromTo(itemsRef.current.filter(Boolean),
      { opacity: 0, x: -15 },
      { opacity: 1, x: 0, stagger: 0.15, duration: 0.5, ease: 'power2.out' },
      "-=0.2"
    );
  }, []);

  return (
    <div ref={containerRef} style={{
      background: 'linear-gradient(145deg, #1f161b 0%, #131014 100%)',
      padding: '24px 20px', borderRadius: 20,
      border: '1.5px solid rgba(220, 38, 38, 0.35)',
      boxShadow: '0 8px 32px rgba(0, 0, 0, 0.6), inset 0 0 20px rgba(220, 38, 38, 0.08)',
    }}>
      <div style={{ textAlign: 'center', marginBottom: 20 }}>
        <Sparkles size={20} color="#ef4444" style={{ marginBottom: 6 }} />
        <h4 style={{
          fontFamily: 'var(--font-display)', fontSize: '1.45rem', color: '#ffffff',
          lineHeight: 1.2
        }}>Doa Tulus Buat Kamu</h4>
      </div>

      <div style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
        {[
          <span>Semoga Zaid selalu sehat, lancar semua urusannya, dan dijauhin dari hal-hal yang bikin pusing.</span>,
          <span>Semoga harimu selalu dipenuhi hal-hal baik dan senyum manismu ga pernah hilang.</span>,
          <span>Semoga rezekinya makin lancar dan berkah biar bisa ajak aku jajan terus yaa.</span>,
          <span>Semoga semua rencana dan cita-cita kamu dipermudah jalannya satu per satu.</span>,
          <span>Makasih ya udah lahir ke dunia dan jadi pasangan terbaik buat aku. Happy birthday!</span>
        ].map((item, i) => (
          <div key={i} ref={(el) => itemsRef.current.push(el)} style={{
            display: 'flex', gap: 12, alignItems: 'flex-start',
            padding: '10px 14px', background: '#16141a', borderRadius: 12,
            boxShadow: '0 2px 10px rgba(0,0,0,0.3)',
            border: '1px solid rgba(220, 38, 38, 0.25)'
          }}>
            <div style={{
              width: 24, height: 24, borderRadius: '50%', flexShrink: 0,
              background: 'linear-gradient(135deg, #ef4444, #991b1b)',
              color: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center',
              fontSize: '0.75rem', fontWeight: 700, fontFamily: 'var(--font-display)',
              marginTop: 2
            }}>{i + 1}</div>
            <p style={{ fontSize: '0.82rem', color: '#f1f5f9', lineHeight: 1.55, flex: 1 }}>
              {item}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

// ─── 📜 Main LoveLetter Component ───
export default function LoveLetter({ onNext }) {
  const [opened, setOpened] = useState(false);
  const [tab, setTab] = useState('letter');
  const envelopeRef = useRef(null);
  const letterRef = useRef(null);
  const sealRef = useRef(null);

  useEffect(() => {
    if (!opened) {
      gsap.fromTo(envelopeRef.current,
        { opacity: 0, y: 30, scale: 0.95 },
        { opacity: 1, y: 0, scale: 1, duration: 0.6, ease: 'back.out(1.4)' }
      );
    } else {
      if (letterRef.current) {
        gsap.fromTo(letterRef.current,
          { opacity: 0, y: 40, scale: 0.95 },
          { opacity: 1, y: 0, scale: 1, duration: 0.6, ease: 'back.out(1.3)' }
        );
      }
    }
  }, [opened]);

  const open = () => {
    if (opened) return;
    const tl = gsap.timeline();
    tl.to(sealRef.current, { scale: 1.3, opacity: 0, duration: 0.3, ease: 'power2.in' });
    tl.to(envelopeRef.current, { y: 60, opacity: 0, scale: 0.9, duration: 0.4, ease: 'power2.in',
      onComplete: () => setOpened(true)
    });
  };

  const tabs = [
    { id: 'letter', label: 'Surat' },
    { id: 'reasons', label: 'Harapan' },
    { id: 'wishes', label: 'Doa' },
  ];

  return (
    <div className="stage">
      {/* Envelope */}
      {!opened && (
        <div ref={envelopeRef} onClick={open} className="glass" style={{
          width: '100%', maxWidth: '350px', padding: '42px 24px', textAlign: 'center',
          cursor: 'pointer', opacity: 0, position: 'relative',
          background: 'linear-gradient(160deg, #1f1519 0%, #121014 100%)',
          border: '1.5px solid var(--glass-border)',
          boxShadow: '0 16px 48px rgba(0,0,0,0.7), 0 0 25px rgba(220,38,38,0.2)',
        }}>
          {/* Stamp */}
          <div style={{
            position: 'absolute', top: 14, right: 14, width: 38, height: 44,
            border: '2px dashed rgba(220,38,38,0.5)', borderRadius: 6,
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            fontSize: '1.1rem', opacity: 0.85,
          }}>💌</div>

          {/* Wax Seal */}
          <div ref={sealRef} className="anim-breathe" style={{
            width: 70, height: 70, borderRadius: '50%', margin: '0 auto 22px',
            background: 'radial-gradient(circle at 40% 35%, #ef4444 0%, #991b1b 100%)',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            boxShadow: '0 6px 24px rgba(220,38,38,0.55), inset 0 -2px 6px rgba(0,0,0,0.3)',
            border: '3px solid rgba(254,202,202,0.6)',
          }}>
            <Heart size={30} fill="#fff" color="#fff" style={{ filter: 'drop-shadow(0 1px 3px rgba(0,0,0,0.3))' }} />
          </div>

          <h2 style={{
            fontFamily: 'var(--font-display)', fontSize: '1.9rem', color: '#ffffff', marginBottom: 6,
          }}>Surat Buat Zaid</h2>
          <p style={{
            fontFamily: 'var(--font-cute)', fontSize: '0.84rem', color: '#f87171', fontWeight: 600,
          }}>Ada pesan kecil yang mau aku sampein</p>

          <div style={{
            marginTop: 24, fontSize: '0.76rem', fontWeight: 700,
            background: 'rgba(220,38,38,0.2)', color: '#fca5a5',
            padding: '8px 18px', borderRadius: 20, display: 'inline-block',
            border: '1.5px solid rgba(239,68,68,0.35)',
          }}>
            Ketuk buat buka suratnya
          </div>
        </div>
      )}

      {/* Opened Letter */}
      {opened && (
        <div ref={letterRef} className="glass" style={{
          width: '100%', maxWidth: '380px', padding: '26px 20px', opacity: 0,
          background: 'linear-gradient(180deg, #1e1519 0%, #121014 100%)',
          border: '1.5px solid rgba(220,38,38,0.35)',
          boxShadow: '0 16px 48px rgba(0,0,0,0.7)',
        }}>
          {/* Header */}
          <div style={{ textAlign: 'center', marginBottom: 18 }}>
            <h1 style={{
              fontFamily: 'var(--font-display)', fontSize: '1.9rem', color: '#ffffff',
              lineHeight: 1.15, marginBottom: 4,
            }}>Happy Birthday, Zaid!</h1>
            <p style={{
              fontFamily: 'var(--font-cute)', fontSize: '0.8rem', color: '#f87171', fontWeight: 600,
            }}>Pesan hangat dan doa terbaik buat kamu</p>
          </div>

          {/* Navigation */}
          <div style={{
            display: 'flex', background: 'rgba(255,255,255,0.06)', padding: 3,
            borderRadius: 14, marginBottom: 16, gap: 2, border: '1px solid rgba(220,38,38,0.3)',
          }}>
            {tabs.map((t) => (
              <button key={t.id} onClick={() => setTab(t.id)} style={{
                flex: 1, padding: '9px 4px', borderRadius: 11, border: 'none',
                background: tab === t.id ? 'linear-gradient(135deg, #dc2626, #7f1d1d)' : 'transparent',
                color: tab === t.id ? '#fff' : '#94a3b8',
                fontFamily: 'var(--font-cute)', fontSize: '0.78rem', fontWeight: 700,
                cursor: 'pointer', transition: 'all 0.2s ease',
              }}>{t.label}</button>
            ))}
          </div>

          {tab === 'letter' && <LetterTab />}
          {tab === 'reasons' && <ImpianTab />}
          {tab === 'wishes' && <WishesTab />}

          {/* CTA Button */}
          <button className="btn-primary" onClick={onNext} style={{ width: '100%', marginTop: 20 }}>
            Tiup Lilin Bareng Yuk <ArrowRight size={16} />
          </button>
        </div>
      )}
    </div>
  );
}
