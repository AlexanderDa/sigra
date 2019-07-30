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
      image: 'https://scontent.fuio13-1.fna.fbcdn.net/v/t1.0-0/c0.0.370.370a/p370x247/51939082_2106208649440296_4276367197095329792_n.jpg?_nc_cat=103&_nc_oc=AQnZStsJsBsW1xxp1LAPp7BovgvyeMBqA0xvL0OBU1Oct2MmlGyrNL9849e5I5fJ23c&_nc_ht=scontent.fuio13-1.fna&oh=d4841286de3f8b8c283722591e9bc00c&oe=5DDFE625'
    },
    {
      lastName: 'Tuapanta',
      firstName: 'Alex Danilo',
      image: 'https://scontent.fuio13-1.fna.fbcdn.net/v/t1.0-9/53676963_2103316746418741_6539329123976740864_n.jpg?_nc_cat=109&_nc_oc=AQl6wGYBgkQx-UiIeRV3Qq8y-PtvZrhUyJW4XnVJOkG3jCnaeVmG8T__792MD_RX73c&_nc_ht=scontent.fuio13-1.fna&oh=f1b2f85fa342fb87c9bdfffaddbc7545&oe=5DA96207'
    },
    {
      lastName: 'Sisa Sisa',
      firstName: 'Angel Isaias',
      image: 'https://scontent.fuio13-1.fna.fbcdn.net/v/t1.0-0/p206x206/16142980_1814194605496782_3513128629143295730_n.jpg?_nc_cat=110&_nc_oc=AQmPJfK-UY6KlR48r5oeloegKx4DKWCQ1RLA093iLp0R-lBefk3-M3yDXkCd7X2A6zk&_nc_ht=scontent.fuio13-1.fna&oh=327a212afaa301451499e64589a924bf&oe=5DEE4F89'
    },
    {
      lastName: 'Vera Correa',
      firstName: 'Jairo Alexander',
      image: 'https://scontent.fuio13-1.fna.fbcdn.net/v/t1.0-0/p370x247/37688617_1980592241980654_5504205532778463232_n.jpg?_nc_cat=101&_nc_oc=AQnDbmBB3NUUckV1Tjf1DjAqKh7z5cSfZtCxXcyEUpqgmIhYspF6-J_bZ_J952MIfwk&_nc_ht=scontent.fuio13-1.fna&oh=ce79d0931cc93425837404cb32bf32d9&oe=5DAD8663'
    }
  ]
}
