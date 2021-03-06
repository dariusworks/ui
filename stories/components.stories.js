import Vue from 'vue';

import { storiesOf } from '@storybook/vue';
import { withKnobs, number } from '@storybook/addon-knobs/vue';

import headerLeft from '../assets/images/home_header_left.svg';
import headerRight from '../assets/images/home_header_right.svg';

import CookiesBanner from '../components/CookiesBanner.vue';
import AButton from '../components/AButton.vue';
import AppFooter from '../components/AppFooter.vue';
import AppHeader from '../components/AppHeader.vue';
import HeroBackground from '../components/HeroBackground.vue';

import '../assets/styles/global.styl';

storiesOf('Asyncy Components/Cookie Banner', module)
  .add('Cookie Banner', () => ({
    components: { CookiesBanner },
    template: '<div><cookies-banner :force-active="true"/></div>'
  }));

storiesOf('Asyncy Components/Header', module)
  .add('Header with dropdown', () => ({
    components: { AppHeader },
    template: `<div><app-header link-component="a" :links="[  { text: 'Platform', to: '/platform' },
      { text: 'Documentation', to: 'https://docs.asyncy.com'},
      {
        text: 'More &#x25BE;',
        items: [
          { text: 'About', to: '/about' },
          { text: 'Events', to: '/events' },
          { text: 'Contact', to: '/contact' },
        ],
      }]"/></div>`
  }))
  .add('Header with search bar and button', () => ({
    components: { AppHeader, AButton },
    template: `<div><app-header link-component="a" :show-search="true" :links="[
      { text: 'Explore', to: '/' },
      { text: 'About Hub', to: '/' },
      { text: 'Platform', to: '/platform' },
      { text: 'Documentation', to: 'https://docs.asyncy.com'},
    ]"><template slot="afterLinks"><a-button>Submit a Service</a-button></template></app-header></div>`
  }))

storiesOf('Asyncy Components/Footer', module)
  .add('Footer', () => ({
    components: { AppFooter },
    template: '<div><app-footer/></div>'
  }));

storiesOf('Header background', module)
  .addDecorator(withKnobs)
  .add('Header background', () => ({
    components: { HeroBackground },
    template: `<hero-background
      left-image="${headerLeft}"
      right-image="${headerRight}"
      :scale="${number('Scale', 3, { step: 0.1 })}"
      :left-x="${number('Left X Position', -300)}"
      :left-y="${number('Left Y Position', 0)}"
      :right-x="${number('Right X Position', -300)}"
      :right-y="${number('Right Y Position', 0)}"
    />`
  }));