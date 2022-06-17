import {Routes, Route} from 'react-router-dom'

import General from './pages/General'
import ExpPage from './pages/ExpPage'
import DinPage from './pages/DinPage'
import CharPage from './pages/CharPage'
import WhatsupPage from './pages/WhatsupPage'
import InfoPage from './pages/InfoPage'

// Experience
import DetailArchipel from './pages/DetailArchipel'
import DetailSirocco from './pages/DetailSirocco'
import DetailNest from './pages/DetailNest'
import DetailMax from './pages/DetailMax'
import DetailFabula from './pages/DetailFabula'
import DetailSymbolica from './pages/DetailSymbolica'
import DetailJoris from './pages/DetailJoris'
import DetailBaron from './pages/DetailBaron'
import DetailDroomvlucht from './pages/DetailDroomvlucht'
import DetailFairytale from './pages/DetailFairytale'
import DetailVliegende from './pages/DetailVliegende'
import DetailPirana from './pages/DetailPirana'

// Characters
import DetailJokie from './pages/DetailJokie'
import DetailJet from './pages/DetailJet'
import DetailCinderella from './pages/DetailCinderella'
import DetailLittle from './pages/DetailLittle'
import DetailLong from './pages/DetailLong'
import DetailTom from './pages/DetailTom'
import DetailGnomeKu from './pages/DetailGnomeKu'
import DetailGnomeKo from './pages/DetailGnomeKo'
import DetailGiant from './pages/DetailGiant'
import DetailWitch from './pages/DetailWitch'
import DetailFakir from './pages/DetailFakir'
import DetailDonkey from './pages/DetailDonkey'
import DetailDragon from './pages/DetailDragon'
import DetailFairytaleTree from './pages/DetailFairytaleTree'
import DetailGoat from './pages/DetailGoat'
import DetailWolf from './pages/DetailWolf'

// Dinning
import DetailWapen from './pages/DetailWapen'
import DetailBackerei from './pages/DetailBackerei'
import DetailVerwende from './pages/DetailVerwende'
import DetailFrau from './pages/DetailFrau'
import DetailFabulaRestaurant from './pages/DetailFabulaRestaurant'
import DetailPolles from './pages/DetailPolles'
import DetailPinokkio from './pages/DetailPinokkio'
import DetailGelaarsde from './pages/DetailGelaarsde'
import DetailHet from './pages/DetailHet'
import DetailKleyne from './pages/DetailKleyne'

// Whatsup
import DetailRaveleijn from './pages/DetailRaveleijn'
import DetailAquanura from './pages/DetailAquanura'
import DetailCollector from './pages/DetailCollector'
import DetailSprookjesboom from './pages/DetailSprookjesboom'
import DetailPardoes from './pages/DetailPardoes'
import DetailMeetJokie from './pages/DetailMeetJokie'
import DetailInhabitant from './pages/DetailInhabitant'

import './styles/index.css'
import './styles/detail.css'

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<General />} />
        <Route path="/exp" element={<ExpPage />} />
        <Route path="/din" element={<DinPage />} />
        <Route path="/char" element={<CharPage />} />
        <Route path="/whatsup" element={<WhatsupPage />} />
        <Route path="/info" element={<InfoPage />} />
        
        {/* Experience */}
        <Route path="/Archipel" element={<DetailArchipel />} />
        <Route path="/Sirocco" element={<DetailSirocco />} />
        <Route path="/Nest" element={<DetailNest />} />
        <Route path="/Max" element={<DetailMax />} />
        <Route path="/Fabula" element={<DetailFabula />} />
        <Route path="/Symbolica" element={<DetailSymbolica />} />
        <Route path="/Joris" element={<DetailJoris />} />
        <Route path="/Baron" element={<DetailBaron />} />
        <Route path="/Droomvlucht" element={<DetailDroomvlucht />} />
        <Route path="/Fairytale" element={<DetailFairytale />} />
        <Route path="/Vliegende" element={<DetailVliegende />} />
        <Route path="/Pirana" element={<DetailPirana />} />

        {/* Dinning */}
        <Route path="/Wapen" element={<DetailWapen />} />
        <Route path="/Backerei" element={<DetailBackerei />} />
        <Route path="/Verwende" element={<DetailVerwende />} />
        <Route path="/Frau" element={<DetailFrau />} />
        <Route path="/FabulaRestaurant" element={<DetailFabulaRestaurant />} />
        <Route path="/Polles" element={<DetailPolles />} />
        <Route path="/Pinokkio" element={<DetailPinokkio />} />
        <Route path="/Gelaarsde" element={<DetailGelaarsde />} />
        <Route path="/Het" element={<DetailHet />} />
        <Route path="/Kleyne" element={<DetailKleyne />} />

        {/* Whatsup */}
        <Route path="/Raveleijn" element={<DetailRaveleijn />} />
        <Route path="/Aquanura" element={<DetailAquanura />} />
        <Route path="/Collector" element={<DetailCollector />} />
        <Route path="/Sprookjesboom" element={<DetailSprookjesboom />} />
        <Route path="/Pardoes" element={<DetailPardoes />} />
        <Route path="/MeetJokie" element={<DetailMeetJokie />} />
        <Route path="/Inhabitant" element={<DetailInhabitant />} />

        {/* Character */}
        <Route path="/Jokie" element={<DetailJokie />} />
        <Route path="/Jet" element={<DetailJet />} />
        <Route path="/Cinderella" element={<DetailCinderella />} />
        <Route path="/Little" element={<DetailLittle />} />
        <Route path="/Long" element={<DetailLong />} />
        <Route path="/Tom" element={<DetailTom />} />
        <Route path="/GnomeKu" element={<DetailGnomeKu />} />
        <Route path="/GnomeKo" element={<DetailGnomeKo />} />
        <Route path="/Giant" element={<DetailGiant />} />
        <Route path="/Witch" element={<DetailWitch />} />
        <Route path="/Fakir" element={<DetailFakir />} />
        <Route path="/Donkey" element={<DetailDonkey />} />
        <Route path="/Dragon" element={<DetailDragon />} />
        <Route path="/FairytaleTree" element={<DetailFairytaleTree />} />
        <Route path="/Goat" element={<DetailGoat />} />
        <Route path="/Wolf" element={<DetailWolf />} />
      
      </Routes>
    </div>
  );
}

export default App;
