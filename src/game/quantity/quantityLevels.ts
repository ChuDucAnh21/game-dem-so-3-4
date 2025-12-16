// src/game/quantity/quantityLevels.ts
import type { CountLevel } from './quantityTypes';

export function buildQuantityLevels(): CountLevel[] {
  return [
   
    {
      id: 3,
      number: 3,
      name: 'viên bi',
      title: 'SỐ LƯỢNG 3',
      objectIcon: [
        'marbles',
        'marbles1',
        'marbles2',
        'marbles3',
        'marbles4',
      ],
      objectCount: 3,
      maxCircles: 4,
      promptKey: 'prompt_quantity_3',
      correctVoiceKey: 'correct_quantity_3',
      correctDrawVoiceKey: 'correct_draw_marbles',
    },
    {
      id: 4,
      number: 4,
      title: 'SỐ LƯỢNG 4',
      name: 'cái kẹo',
      objectIcon: ['candy', 'candy1', 'candy2', 'candy3'],
      objectCount: 4,
      maxCircles: 4,
      promptKey: 'prompt_quantity_4',
      correctVoiceKey: 'correct_quantity_4',
      correctDrawVoiceKey: 'correct_draw_candy',
    },
  ]
}
