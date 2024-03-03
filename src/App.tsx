import { useState } from 'react'
import './App.css'
import logofrases from './assets/logo.png'

function App() {
  const [textoFrase, setFrase] = useState("")
  const [categoriaSelecionada, setCategoriaSelecionada] = useState(0)

  const allFrases = [
    {
      id: 1,
      nome: "Motivação",
      frases: [
        "O sucesso é a soma de pequenos esforços repetidos dia após dia.",
        "Acredite em si mesmo e tudo será possível.",
        "Quanto maior o obstáculo, maior a glória em superá-lo.",
        "Seja a mudança que você deseja ver no mundo.",
        "O que você faz hoje pode melhorar todos os seus amanhãs.",
        "Lute pelos seus sonhos, mesmo que isso signifique enfrentar desafios.",
        "Não tenha medo de falhar, tenha medo de não tentar.",
        "A persistência é o caminho do êxito.",
        "A vida é 10% do que acontece comigo e 90% de como eu reajo a isso.",
        "Você é mais forte do que imagina, mais corajoso do que acredita, mais talentoso do que pensa.",
        "O sucesso nasce do querer, da determinação e persistência em se chegar a um objetivo.",
        "Não espere por uma crise para descobrir o que é importante em sua vida.",
        "O segredo do sucesso é a constância do propósito.",
        "A melhor maneira de prever o futuro é criá-lo.",
        "O otimismo é a fé em ação. Nada se pode realizar sem otimismo.",
        "Quando você quer alguma coisa, todo o universo conspira para que você realize o seu desejo."
      ],

    },
    {
      id: 2,
      nome: "Bem estar",
      frases: [
        "Cuide do seu corpo. É o único lugar que você tem para viver.",
        "A felicidade não é algo pronto. Ela vem de suas próprias ações.",
        "O segredo da saúde mental e corporal está em não se lamentar pelo passado, não se preocupar com o futuro, e não antecipar problemas, mas viver o presente de forma sábia e séria.",
        "Mente sã, corpo são.",
        "O sorriso é o melhor remédio para qualquer problema.",
        "Agradeça a cada novo dia e celebre cada pequena vitória.",
        "Lembre-se de cuidar da sua mente tanto quanto cuida do seu corpo.",
        "Faça da gratidão o seu estado de espírito diário.",
        "Pratique o autocuidado regularmente, é uma forma de demonstrar amor por si mesmo.",
        "Encontre tempo para relaxar e recarregar suas energias.",
        "A jornada para a felicidade começa com um passo de cada vez, então comece hoje mesmo.",
        "Seja gentil consigo mesmo. Você merece todo o amor e carinho que dá aos outros.",
        "Reserve um tempo para atividades que te tragam paz e tranquilidade.",
        "Aceite-se como você é e permita-se ser imperfeito.",
        "A vida é uma jornada, não uma corrida. Aproveite cada momento do caminho."
      ]
    }
  ]

  function handleCategory(index: number){
    setCategoriaSelecionada(index);
  }

  function gerarFrase(){
    let numeroAleatorio = Math.floor(Math.random() * allFrases[categoriaSelecionada].frases.length)

    setFrase(`"${allFrases[categoriaSelecionada].frases[numeroAleatorio]}"`)
  }

  return (
    <>
      <div className='container'>
        <img src={logofrases} alt="fraseslogo" className='logo' />
        <h2 className='title'>Categorias</h2>
        <section className='categoria-area'>
          {allFrases.map((item, index) => (
            <button onClick={() => handleCategory(index) } key={item.id} className='categoria-button' 
            style={{borderWidth: item.nome === allFrases[categoriaSelecionada].nome ? 2 : 0,
                    borderColor: "#1FA4BD"} }>
              {item.nome}
            </button>
          ))}
        </section>

        <button onClick={gerarFrase} className='buttonFrase'>Gerar Frase</button>

        {textoFrase !== '' && <p className='textoFrase'>{textoFrase}</p>}
      </div>
    </>
  )
}

export default App
