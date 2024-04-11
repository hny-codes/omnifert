import OmniImg from 'src/assets/articles/article1.png';
import EnvImg from 'src/assets/articles/article2.png';
import StandardImg from 'src/assets/articles/article3.png';
import PolicyImg from 'src/assets/articles/article7.png';
import SpeechImg from 'src/assets/articles/article6.png';
import PressImg from 'src/assets/articles/article4.png';
import FarmersPressImg from 'src/assets/articles/article5.png';

export function imageFactory(param: string) {
  switch (param) {
    case 'Connecting with farmers to improve livelihoods':
      return { image: OmniImg, alt: 'omnifarmers image' };
    case 'The Changing Effects of the Environment on Agriculture':
      return { image: EnvImg, alt: 'Environment image' };
    case 'Agriculture, Trade & Regulatory Standards in Ghana':
      return { image: StandardImg, alt: 'Standard Image' };
    case 'Agriculture and Government Policy':
      return { image: PolicyImg, alt: 'policy image' };
    case 'Press Statement Omnifert':
      return { image: PressImg, alt: 'press image' };
    case "CEO's Speech for Omnifert":
      return { image: SpeechImg, alt: 'ceo speech image' };
    case 'Omnifert Press Release Farmers Day 2017':
      return { image: FarmersPressImg, alt: 'farmers press image' };
  }
}
