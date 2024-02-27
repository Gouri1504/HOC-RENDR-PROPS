import './App.css';
import LikeImageHOC from './components/HOC/LikeImageHOC';
import LikePostHOC from './components/HOC/LikePostHOC';
import LikeImage from './components/Render/LikeImage';
import LikePost from './components/Render/LikePost';
import Wrapper from './components/Render/Wrapper';

function App() {
  return (
    <>

      <h1>Some Blog</h1>
      
      <h3>With RenderProps</h3>

      <Wrapper render={(counter, handleIncrement) => {
        return <LikeImage handleLikeImage={handleIncrement} LikeImageCounter={counter} />
      }} />
      <Wrapper render={(counter, handleIncrement) => {
        return <LikePost handleLikePost={handleIncrement} LikePostCounter={counter} />
      }} />

    
      <div>
        <h3>HOC</h3>
        <LikeImageHOC />
        <LikePostHOC />
      </div>
    </>

  )
}

export default App;