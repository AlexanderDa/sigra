<template>
  <div>
    <v-menu offset-y>
      <template v-slot:activator="{ on }">
        <v-btn color="primary" dark v-on="on" icon>
          <v-icon>cloud_download</v-icon>
        </v-btn>
      </template>
      <v-list>
        <v-list-item @click="()=>dialogFaculty = true">Por Facultad</v-list-item>
        <v-list-item @click="()=>dialogCareer = true">Por Carrera</v-list-item>
      </v-list>
    </v-menu>
    <!--------------------------------------------------------------->
    <v-dialog v-model="dialogFaculty" scrollable max-width="400px">
      <v-card>
        <v-card-title>Seleccione la Facultad</v-card-title>
        <v-divider></v-divider>
        <v-card-text>
          <v-list dense>
            <v-list-item
              v-for="(item,index) of faculties"
              :key="index"
              @click="printByFaculty(item)"
            >
              <v-list-item-content>
                <v-list-item-title>{{item.name}}</v-list-item-title>
              </v-list-item-content>
            </v-list-item>
          </v-list>
        </v-card-text>
        <v-divider></v-divider>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="blue darken-1" text @click="dialogFaculty = false">Close</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
    <!--------------------------------------------------------------->
    <v-dialog v-model="dialogCareer" scrollable max-width="400px">
      <v-card>
        <v-card-title>Seleccione la Carrera</v-card-title>
        <v-divider></v-divider>
        <v-card-text>
          <v-list dense>
            <v-list-item v-for="(item,index) of careers" :key="index" @click="printByCareer(item)">
              <v-list-item-content>
                <v-list-item-title>{{item.name}}</v-list-item-title>
              </v-list-item-content>
            </v-list-item>
          </v-list>
        </v-card-text>
        <v-divider></v-divider>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="blue darken-1" text @click="dialogCareer = false">Close</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </div>
</template>
<script lang="ts">
import Vue from 'vue'
import Component from 'vue-class-component'
import { Emit, Prop, Watch } from 'vue-property-decorator'
import swal from 'sweetalert'
import pdfmake from 'pdfmake/build/pdfmake'
import pdffont from 'pdfmake/build/vfs_fonts'
pdfmake.vfs = pdffont.pdfMake.vfs

@Component({ name: 'graduate-report' })
export default class GraduateReportWidget extends Vue {
  @Prop() public graduates!: any;
  @Prop() public faculties!: any;
  @Prop() public careers!: any;

  public dialogFaculty: boolean = false;

  public dialogCareer: boolean = false;

  public async printByFaculty (faculty: any) {
    let body: any = [
      [
        { text: 'Graduado', style: 'thead' },
        { text: 'Fecha de graduación', style: 'thead' },
        { text: 'Carrera', style: 'thead' },
        { text: 'Puntaje', style: 'thead' },
        { text: 'Senescyt', style: 'thead' }
      ]
    ]
    this.graduates.forEach((graduate: any) => {
      if (graduate.faculty.id === faculty.id) {
        body.push([
          graduate.graduated.fullName,
          graduate.graduationDate,
          graduate.career.name,
          graduate.gradeScore,
          graduate.senescytRecord
        ])
      }
    })

    this.dialogFaculty = false
    if (body.length > 1) {
      await pdfmake.createPdf(this.getDefinition(faculty.name, body)).download()
    } else {
      swal(
        'Algo salió mal',
        'No existen registros para crear el pdf!',
        'warning'
      )
    }
  }
  public async printByCareer (career: any) {
    let body: any = [
      [
        { text: 'Graduado', style: 'thead' },
        { text: 'Fecha de graduación', style: 'thead' },
        { text: 'Facultad', style: 'thead' },
        { text: 'Puntaje', style: 'thead' },
        { text: 'Senescyt', style: 'thead' }
      ]
    ]
    this.graduates.forEach((graduate: any) => {
      if (graduate.career.id === career.id) {
        body.push([
          graduate.graduated.fullName,
          graduate.graduationDate,
          graduate.faculty.name,
          graduate.gradeScore,
          graduate.senescytRecord
        ])
      }
    })

    this.dialogCareer = false
    if (body.length > 1) {
      await pdfmake.createPdf(this.getDefinition(career.name, body)).download()
    } else {
      swal(
        'Algo salió mal',
        'No existen registros para crear el pdf!',
        'warning'
      )
    }
  }

  public getDefinition (title: string, bodyDefinition?: any): any {
    let definition: any = {
      // pageOrientation: this.orientation,
      pageSize: 'A4',
      content: [
        {
          layout: 'noBorders',
          table: {
            headerRows: 1,
            widths: ['*'],
            body: [
              [
                {
                  text: `UNIVERSIDAD NACIONAL DE CHIMBORAZO
                          ${title.toUpperCase()}
                          LISTA DE GRADUADOS`,
                  style: 'docHeader'
                }
              ]
            ]
          }
        },

        {
          style: 'infoLabel',
          margin: [0, 6],
          layout: {
            hLineWidth (i: number, node: any) {
              return i === 0 || i === node.table.body.length ? 0.5 : 0.5
            },
            vLineWidth (i: number, node: any) {
              return i === 0 || i === node.table.widths.length ? 0.5 : 0.5
            },
            hLineColor (i: number, node: any) {
              return i === 0 || i === node.table.body.length
                ? '#bdbdbd'
                : '#bdbdbd'
            },
            vLineColor (i: number, node: any) {
              return i === 0 || i === node.table.widths.length
                ? '#bdbdbd'
                : '#bdbdbd'
            }
          },
          table: {
            layout: {
              hLineWidth (i: number, node: any) {
                return i === 0 || i === node.table.body.length ? 1 : 1
              },
              vLineWidth (i: number, node: any) {
                return i === 0 || i === node.table.widths.length ? 1 : 1
              },
              hLineColor (i: number, node: any) {
                return i === 0 || i === node.table.body.length
                  ? '#bdbdbd'
                  : '#bdbdbd'
              },
              vLineColor (i: number, node: any) {
                return i === 0 || i === node.table.widths.length
                  ? '#bdbdbd'
                  : '#bdbdbd'
              }
            },
            widths: ['auto', 'auto', '*', 'auto', 'auto'],
            body: bodyDefinition
          }
        }
      ],
      styles: this.getStyle()
    }
    return definition
  }

  private getStyle (): any {
    return {
      invoiceHeader: {
        fontSize: 14,
        color: '#000000',
        alignment: 'center',
        bold: true,
        margin: 2
      },
      docHeader: {
        fontSize: 14,
        color: 'white',
        fillColor: '#00B9D1',
        alignment: 'center',
        bold: true,
        margin: 2
      },
      titleLabel: {
        bold: true,
        color: '#666666'
      },
      footer: {
        fontSize: 10,
        color: '#000000',
        alignment: 'center'
      },
      infoLabel: {
        fontSize: 10,
        margin: [0, 5]
      },
      thead: {
        alignment: 'center',
        fillColor: '#00B9D1',
        color: '#fff',
        bold: true,
        margin: [0, 2],
        fontSize: 10
      },
      tcell: {
        margin: [0, 3],
        fontSize: 10
      }
    }
  }
}
</script>
