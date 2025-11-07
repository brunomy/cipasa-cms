import './VentureDifferences.scss';
import { Box } from '@mui/material';
import { useState, useEffect, useMemo } from 'react';

import icon1 from './images/icon1[55x45].png';
import icon2 from './images/icon2[55x45].png';
import icon3 from './images/icon3[55x45].png';
import icon4 from './images/icon4[55x45].png';
import icon5 from './images/icon5[55x45].png';
import icon6 from './images/icon6[55x45].png';
import ButtonFilter from '../../../../components/Buttons/ButtonFilter/ButtonFilter';

export default function VentureDifferences({ venture, categoriesDif }) {
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [diferences, setDiferences] = useState([]);

  useEffect(() => {
    const cats = categoriesDif || {};

    const arr = (venture?.diferenciais ?? [])
      .filter(d => d && d.published)
      .map((d, idx) => {
        const catIds = Array.isArray(d.categoria) ? d.categoria : [];
        const firstId = catIds.length ? catIds[0] : null;

        return {
          id: d.id ?? idx,
          icon: d?.icone?.permalink ?? d?.icone?.url ?? null,
          title: d.title ?? '',
          id_category: firstId,
          name_category: firstId != null ? (cats[firstId] ?? String(firstId)) : '',
          categories: catIds.map(id => ({ id, name: cats[id] ?? String(id) })),
        };
      });

    setDiferences(arr);
  }, [venture, categoriesDif]);

  const uniqueCategories = useMemo(() => {
    const map = new Map();
    for (const d of diferences) {
      for (const c of (d.categories ?? [{ id: d.id_category, name: d.name_category }])) {
        if (c?.id == null) continue;
        if (!map.has(c.id)) map.set(c.id, { id_category: c.id, name_category: c.name });
      }
    }
    
    return [...map.values()].sort((a, b) =>
      String(a.name_category).localeCompare(String(b.name_category), 'pt-BR')
    );
  }, [diferences]);

    const filteredDifferences = useMemo(() => {
      if (selectedCategory === null) return diferences;

      return diferences.filter(d =>
        (d.categories ?? [{ id: d.id_category }]).some(c => c.id === selectedCategory)
      );
    }, [diferences, selectedCategory]);

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