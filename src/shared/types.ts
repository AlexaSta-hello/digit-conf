export enum SelectedPage { 
    Home = "home",
    Speakers = "speakers",
    Workshops = "workshops",
    FAQ = "faq",
    Register = "register",
  }

export interface SpeakerType {
  image: string;
  name: string,
  description: string
}

export interface Workshop  {
    day: string;
    time: string;
    name: string;
    speaker?: string;
    description?: string;
  };
