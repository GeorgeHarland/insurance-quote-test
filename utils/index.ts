export const getImage = (image: string) => {
  return `/images/${image}.png`;
};

export const getImageByProviderName = (provider: string) => {
  switch (provider) {
    case 'AXA Assistance USA':
      return getImage('axa-logo');
    case 'AIG':
      return getImage('aig-logo');
    case 'IMG':
      return getImage('img-logo');
    case 'Travelex':
      return getImage('travelex-logo');
    case 'Seven Corners':
      return getImage('sevencorners-logo');
    case 'Trawick International':
      return getImage('trawickinternational-logo');
  }
  return '';
};
