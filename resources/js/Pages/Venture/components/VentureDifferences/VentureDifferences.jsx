import './VentureDifferences.scss';
import { Box } from '@mui/material';
import { useState } from 'react';

import icon1 from './images/icon1[55x45].png';
import icon2 from './images/icon2[55x45].png';
import icon3 from './images/icon3[55x45].png';
import icon4 from './images/icon4[55x45].png';
import icon5 from './images/icon5[55x45].png';
import icon6 from './images/icon6[55x45].png';
import ButtonFilter from '../../../../components/Buttons/ButtonFilter/ButtonFilter';

export default function VentureDifferences() {
  const [selectedCategory, setSelectedCategory] = useState(null);

  const [diferences, setDiferences] = useState([
    { id: 0, icon: icon1, title: 'Área de lazer', id_category: 1, name_category: 'Lazer' },
    { id: 1, icon: icon2, title: 'Áreas Verdes', id_category: 2, name_category: 'Sustentabilidade' },
    { id: 2, icon: icon3, title: 'Bicicletário', id_category: 3, name_category: 'Infraestrutura' },
    { id: 3, icon: icon4, title: 'Campo de futebol', id_category: 1, name_category: 'Lazer' },
    { id: 4, icon: icon5, title: 'Central de resíduos', id_category: 4, name_category: 'Segurança' },
    { id: 5, icon: icon6, title: 'Eficiência Energética', id_category: 4, name_category: 'Segurança' },
    { id: 6, icon: icon1, title: 'Área de lazer 2', id_category: 1, name_category: 'Lazer' },
    { id: 7, icon: icon2, title: 'Áreas Verdes 2', id_category: 2, name_category: 'Sustentabilidade' },
    { id: 8, icon: icon3, title: 'Bicicletário 2', id_category: 3, name_category: 'Infraestrutura' },
    { id: 9, icon: icon4, title: 'Campo de futebol 2', id_category: 1, name_category: 'Lazer' },
    { id: 10, icon: icon5, title: 'Central de resíduos 2', id_category: 4, name_category: 'Segurança' },
    { id: 11, icon: icon6, title: 'Eficiência Energética 2', id_category: 4, name_category: 'Segurança' },
    { id: 12, icon: icon1, title: 'Área de lazer 3', id_category: 1, name_category: 'Lazer' },
    { id: 13, icon: icon2, title: 'Áreas Verdes 3', id_category: 2, name_category: 'Sustentabilidade' },
    { id: 14, icon: icon3, title: 'Bicicletário 3', id_category: 3, name_category: 'Infraestrutura' },
    { id: 15, icon: icon4, title: 'Campo de futebol 3', id_category: 1, name_category: 'Lazer' },
    { id: 16, icon: icon5, title: 'Central de resíduos 3', id_category: 4, name_category: 'Segurança' },
    { id: 17, icon: icon6, title: 'Eficiência Energética 3', id_category: 4, name_category: 'Segurança' },
  ]);

  const uniqueCategories = diferences.reduce((acc, current) => {
    const exists = acc.find(item => item.id_category === current.id_category);
    if (!exists) {
      acc.push({
        id_category: current.id_category,
        name_category: current.name_category
      });
    }
    return acc;
  }, []).sort((a, b) => a.id_category - b.id_category);

  const filteredDifferences = diferences.filter(item => selectedCategory === null || item.id_category === selectedCategory);

  return (
    <Box className="venture_differences" component="section">
      <Box className="content">
        <h2>Diferenciais</h2>
        <Box className="filter_content">
          <ButtonFilter isActive={selectedCategory === null} onClick={() => setSelectedCategory(null)}>Todas</ButtonFilter>
          {uniqueCategories.map(category => (
            <ButtonFilter key={category.id_category} isActive={selectedCategory === category.id_category} onClick={() => setSelectedCategory(category.id_category)}>
              {category.name_category}
            </ButtonFilter>
          ))}
        </Box>
        <Box className="list_content">
          {filteredDifferences.map(item => (
            <Item key={item.id} item={item} />
          ))}
        </Box>
      </Box>
    </Box>
  )
}

function Item({ item }){
  return (
    <Box className="item">
      <Box className="icon">
        <img src={item.icon} alt={item.title} />
      </Box>
      <h3>{item.title}</h3>
    </Box>
  )
}