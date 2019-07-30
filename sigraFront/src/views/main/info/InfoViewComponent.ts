import Vue from 'vue'
import Component from 'vue-class-component'

@Component({ name: 'InfoPage' })
export default class InfoView extends Vue {
  public authors: any = [
    {
      lastName: 'Bonilla Adriano',
      firstName: 'Alexander David',
      image: 'https://avatars2.githubusercontent.com/u/29008617?s=460&v=4'
    },
    {
      lastName: 'Porras Vasconez',
      firstName: 'Erik Joaquin',
      image: ''
    },
    {
      lastName: 'Tuapanta',
      firstName: 'Alex Danilo',
      image: ''
    },
    {
      lastName: 'Sisa Sisa',
      firstName: 'Angel Isaias',
      image: ''
    },
    {
      lastName: 'Vera Correa',
      firstName: 'Jairo Alexander',
      image: ''
    }
  ]
}
