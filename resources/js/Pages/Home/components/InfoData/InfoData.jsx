import './InfoData.scss';
import { useState, useEffect, useRef } from 'react';
import { Box } from '@mui/material';
import icon1 from './icons/icon1.svg';
import icon2 from './icons/icon2.svg';
import icon3 from './icons/icon3.svg';
import Button1 from '../../../../components/Buttons/Button1/Button1';

export default function InfoData() {
  const targetValues = { dado1: 140, dado2: 90, dado3: 100 };
  
  const [dado1, setDado1] = useState(0);
  const [dado2, setDado2] = useState(0);
  const [dado3, setDado3] = useState(0);
  const [hasAnimated, setHasAnimated] = useState(false);
  
  const animationRef = useRef();
  const componentRef = useRef();
  
  const animateValue = (setValue, targetValue, duration = 2000) => {
    const startTime = Date.now();
    
    const animate = () => {
      const currentTime = Date.now();
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);
      
      const easeOut = 1 - Math.pow(1 - progress, 3);
      const currentValue = Math.floor(targetValue * easeOut);
      
      setValue(currentValue);
      
      if (progress < 1) {
        animationRef.current = requestAnimationFrame(animate);
      }
    };
    
    animate();
  };
  
  const startAnimations = () => {
    if (!hasAnimated) {
      setHasAnimated(true);
      setTimeout(() => animateValue(setDado1, targetValues.dado1), 500);
      setTimeout(() => animateValue(setDado2, targetValues.dado2), 1000);
      setTimeout(() => animateValue(setDado3, targetValues.dado3), 1500);
    }
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            startAnimations();
          }
        });
      },
      {
        threshold: 1,
        rootMargin: '0px'
      }
    );

    if (componentRef.current) {
      observer.observe(componentRef.current);
    }

    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
      observer.disconnect();
    };
  }, [hasAnimated]);

  return (
    <Box component="section" className={"info_data"+(hasAnimated ? " animated" : "")}>
      <Box className="content">
        <Box className="top">
          <Box className="item" ref={componentRef}>
            <Box className="icon">
              <img src={icon1} alt="Ícone 1" />
            </Box>
            <Box className="text">
              <h3>+{dado1}m²</h3>
              <p>de História e Realizações</p>
            </Box>
          </Box>
          <Box className="item">
            <Box className="icon">
              <img src={icon2} alt="Ícone 2" />
            </Box>
            <Box className="text">
              <h3>+{dado2}</h3>
              <p>Cidades com Nossa Presença</p>
            </Box>
          </Box>
          <Box className="item">
            <Box className="icon">
              <img src={icon3} alt="Ícone 3" />
            </Box>
            <Box className="text">
              <h3>+{dado3}</h3>
              <p>Condomínios Lançados</p>
            </Box>
          </Box>
        </Box>
        <Box className="bottom">
          <h2>
            Transformando <br />
            <b>sonhos em realidade</b>
          </h2>
          <Box>
            <p>A Cipasa é uma empresa com décadas de experiência no mercado imobiliário, dedicada a criar projetos que transformam sonhos em realidade. Com foco em qualidade, inovação e sustentabilidade, desenvolvemos lares e comunidades que promovem o bem-estar e o desenvolvimento urbano.</p>
            <Button1>Conheça a Cipasa</Button1>
          </Box>
        </Box>
      </Box>
    </Box>
  )
}