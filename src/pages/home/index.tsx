import BotaoAdicionar from '../../components/BotaoAdicionar'
import BarraLatareal from '../../containers/BarraLateral'
import ListaDeTarefas from '../../containers/ListaDeTarefas'

const home = () => (
  <>
    <BarraLatareal mostrarFiltros />
    <ListaDeTarefas />
    <BotaoAdicionar />
  </>
)

export default home
