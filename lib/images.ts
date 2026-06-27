// Verified Unsplash photos (URLs checked to resolve 200). Themed to the physical
// object of freedom: open roads, flight, foreign skylines, departure boards.
export function unsplash(id: string, w = 1600, q = 80) {
  return `https://images.unsplash.com/${id}?auto=format&fit=crop&w=${w}&q=${q}`;
}

export const IMG = {
  heroWing: {
    id: "photo-1436491865332-7a61a109cc05",
    alt: "Asa de um avião sobre um mar de nuvens douradas ao pôr do sol",
  },
  openRoad: {
    id: "photo-1500835556837-99ac94a94552",
    alt: "Estrada deserta seguindo reta até o horizonte sob céu aberto",
  },
  planeWindow: {
    id: "photo-1530521954074-e64f6810b32d",
    alt: "Vista da janela de um avião com a asa sobre a paisagem ao amanhecer",
  },
  cityDusk: {
    id: "photo-1518684079-3c830dcef090",
    alt: "Skyline de uma metrópole global iluminada ao entardecer",
  },
  mountainRoad: {
    id: "photo-1469854523086-cc02fe5d8800",
    alt: "Estrada sinuosa atravessando montanhas em direção ao mar",
  },
  beach: {
    id: "photo-1507525428034-b723cf961d3e",
    alt: "Praia tropical de águas turquesa vista de cima",
  },
  terminal: {
    id: "photo-1521295121783-8a321d551ad2",
    alt: "Corredor de um terminal de aeroporto banhado por luz natural",
  },
  departureBoard: {
    id: "photo-1473625247510-8ceb1760943f",
    alt: "Painel de embarque de aeroporto listando destinos internacionais",
  },
  dunes: {
    id: "photo-1539635278303-d4002c07eae3",
    alt: "Dunas de um deserto dourado ao fim da tarde",
  },
  paris: {
    id: "photo-1502602898657-3e91760cbb34",
    alt: "Telhados de uma cidade europeia com avenidas arborizadas",
  },
  street: {
    id: "photo-1499591934245-40b55745b905",
    alt: "Rua tranquila de uma cidade europeia ao amanhecer",
  },
  aerialCity: {
    id: "photo-1467269204594-9661b134dd2b",
    alt: "Vista aérea de um bairro planejado de uma cidade litorânea",
  },
  alps: {
    id: "photo-1517400508447-f8dd518b86db",
    alt: "Picos nevados sob um céu limpo de inverno",
  },
  flatlayMap: {
    id: "photo-1488646953014-85cb44e25828",
    alt: "Mapa-múndi sobre uma mesa com câmera e bússola, pronto para planejar uma viagem",
  },
} as const;
