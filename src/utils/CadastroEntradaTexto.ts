const secoes = [
    {
      id: 1,
      titulo: 'Insira alguns dados básicos',
      entradaTexto: [
        {
          id: 1,
          label: 'Nome',
          placeholder: 'Digite seu nome completo',
          name: 'nome'
        },
        {
          id: 2,
          label: 'E-mail',
          placeholder: 'Digite seu E-mail',
          name: 'email'
        },
        {
          id: 3,
          label: 'Senha',
          placeholder: 'Insira sua senha',
          secureTextEntry: true,
          name: 'senha'
        },
        {
          id: 4,
          label: 'Repita a senha',
          placeholder: 'Insira sua senha',
          secureTextEntry: true,
          name: 'confirmaSenha'
        },
        {
          id: 5,
          label: 'CPF',
          placeholder: 'Insira seu CPF',
          name: 'cpf'
        },
        {
          id: 6,
          label: 'Foto de perfil',
          placeholder: 'Link da foto',
          name: 'imagem'
        }
      ]
    },
    {
      id: 2,
      titulo: 'Agora, mais alguns dados sobre você:',
      entradaTexto: [
        {
          id: 1,
          label: 'CEP',
          placeholder: 'Digite seu CEP',
          name: 'cep'
        },
        {
            id: 2,
            label: 'Rua',
            placeholder: 'Nome da rua',
            name: 'rua'
        },
        {
            id: 3,
            label: 'Número',
            placeholder: 'Insira seu número',
            name: 'numero'
        },
        {
            id: 4,
            label: 'Complemento',
            placeholder: 'Insira seu complemento',
            name: 'complemento'
        },
        {
            id: 5,
            label: 'Telefone',
            placeholder: '(00) 00000-0000',
            name: 'telefone'
        },
        {
            id: 6,
            label: 'Estado',
            placeholder: 'Seu Estado',
            name: 'estado'
        }
      ]
    },
    {
      id: 3,
      titulo: 'Para finalizar, quais são os seus planos?',
      checkbox: [
        {
          id: 1,
          value: 'Sulameria'
        },
        {
          id: 2,
          value: 'Unimed'
        },
        {
          id: 3,
          value: 'Bradesco'
        },
        {
          id: 4,
          value: 'Amil'
        },
        {
          id: 5,
          value: 'Biosaúde'
        },
        {
          id: 6,
          value: 'Biovida'
        },
        {
          id: 7,
          value: 'Outros'
        }
      ]
    }
  ]
  export { secoes }