interface IFilterColumns {
  name: 'gender' | 'size' | 'type'
  title: string
  options: {
    value: string
    text: string
  }[]
}

export const filterColumns: IFilterColumns[] = [
  {
    name: 'type',
    title: 'Espécie',
    options: [
      { value: '', text: 'Todos' },
      { value: 'Dog', text: 'Cachorros' },
      { value: 'Cat', text: 'Gatos' }
    ]
  },
  {
    name: 'size',
    title: 'Porte',
    options: [
      { value: '', text: 'Todos' },
      { value: 'Small', text: 'Pequeno' },
      { value: 'Medium', text: 'Médio' },
      { value: 'Large', text: 'Grande' }
    ]
  },
  {
    name: 'gender',
    title: 'Gênero',
    options: [
      { value: '', text: 'Todos' },
      { value: 'Female', text: 'Feminino' },
      { value: 'Male', text: 'Masculino' }
    ]
  }
]
