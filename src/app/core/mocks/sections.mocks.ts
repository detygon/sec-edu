export const sections = [
  {
    id: 1,
    topic_id: 1,
    name: 'Observation',
    label: 'Agglomération, intersection, descente de passagers',
    icon: '/assets/images/sections/research.svg',
    entry_video: 'animation_scene_depart.mp4',
    success_video: 'animation_sans_accident.mp4',
    error_video: 'animation_accident.mp4',
    question: {
      context: `En agglomération, à l’abord d’une intersection, un véhicule de transport en commun
      est arrêté sur le bord droit de la chaussée afin de permettre aux passagers de descendre.
      Un passager descend et traverse devant le bus en empruntant le passage pour piétons.`,
      content: `La scène semble simple, en réalité, elle est plutôt complexe : intersection,
      croisement de plusieurs catégories d’usagers et visibilité fortement masquée à gauche par
      la présence du bus à l’arrêt. Un véhicule circulant dans une rue venant de droite aborde
      la rue que traverse le piéton. Dans cette situation, il est essentiel que le piéton
      identifie les risques existants afin d’adapter son comportement, maintenir sa sécurité
      ainsi que celle des autres.`,
      entry_video: '/assets/video/animation_scene_depart.mp4',
      success_video: '/assets/video/animation_sans_accident.mp4',
      error_video: '/assets/video/animation_accident.mp4',
      learning_outcomes: [
        'Apprendre à observer finement',
        'Apprendre à analyser les principaux facteurs en jeu dans une situation donnée',
        'Identifier les comportements à adopter en tant que piétons sur la voie publique'
      ],
      answers: [
        {
          id: 1,
          content: 'Aucun risque',
          label: 'nothing',
          is_correct: false
        },
        {
          id: 2,
          content: 'Une pluie soudaine',
          label: 'no',
          is_correct: false
        },
        {
          id: 3,
          content: 'Une voiture venant de derriere le bus',
          label: 'yes',
          is_correct: true
        }
      ]
    }
  },
  {
    id: 2,
    topic_id: 1,
    name: '',
    label: '',
    icon: '',
    question: {
      content: '',
      entry_video: '',
      success_video: '',
      error_video: '',
      answers: [
        {
          content: '',
          is_correct: false
        },
        {
          content: '',
          is_correct: false
        },
        {
          content: '',
          is_correct: true
        }
      ]
    }
  },
  {
    id: 3,
    topic_id: 1,
    name: '',
    label: '',
    icon: '',
    question: {
      content: '',
      entry_video: '',
      success_video: '',
      error_video: '',
      answers: [
        {
          content: '',
          is_correct: false
        },
        {
          content: '',
          is_correct: false
        },
        {
          content: '',
          is_correct: true
        }
      ]
    }
  }
]
