import React, { useRef } from 'react';
import { Button } from 'primereact/button';
import './App.css';
import { Toast } from 'primereact/toast';
import TreeBG from '../assets/TreeBG.jpg';
import 'primereact/resources/themes/saga-green/theme.css';
import 'primereact/resources/primereact.min.css';
import 'primeicons/primeicons.css';
import 'primeflex/primeflex.css';

function App() {
  const toast = useRef(null);
  const showMsg = () => {
    toast.current.show({ severity: 'warn', summary: 'Thanks for your visit 👋', detail: 'Page design is in progress. Please come back later', life: 5000 });
  };
  return (

    <div className="grid grid-nogutter surface-0 text-800">
      <div className="col-12 md:col-6 p-6 text-center md:text-left flex align-items-center ">
        <Toast ref={toast} />
        <section>
          <span className="block text-6xl font-bold mb-1">IBM Call-For-Code 2022</span>
          <div className="text-6xl text-primary font-bold mb-3">Project placeholder: GREEETH</div>
          <p className="mt-0 mb-4 text-700 line-height-3">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>

          <Button label="Learn More" type="button" className="mr-3 p-button-raised shadow-8" onClick={() => showMsg()} />
          <Button label="Live Demo" type="button" className="p-button-outlined shadow-8" onClick={() => showMsg()} />
        </section>
      </div>
      <div className="col-12 md:col-6 overflow-hidden">
        <img src={TreeBG} alt="hero-1" className="md:ml-auto block md:h-full" style={{ clipPath: 'polygon(8% 0, 100% 0%, 100% 100%, 0 100%)' }} />
      </div>
    </div>

  );
}

export default App;
