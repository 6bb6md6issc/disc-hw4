import Image from "./Image.js"
import NavigationBar from "./NavigationBar.js"
import ConnectInfo from "./ConnectInfo.js"
import Footer from "./Footer.js"

function App() {
  return(
    <>
      <Image />
      <NavigationBar />
      <ConnectInfo groupName="Purple Cat's Group"/>
      <ConnectInfo groupName="Wild Cat's Group"/>
      <Footer />
    </>
  );
}

export default App;
