import React, { useState, useEffect } from "react";

function DevForm({ onSubmit }) {
    const [githubUsername, setGithubUsername] = useState('');
    const [techs, setTechs] = useState('');
    const [latitude, setlatitude] = useState('');
    const [longitude, setlongitude] = useState('');

    useEffect(() => {
        navigator.geolocation.getCurrentPosition(
          (position)=> {
            const { latitude, longitude } = position.coords
    
            setlatitude(latitude);
            setlongitude(longitude)
          },
          (err) => {
            console.log(err)
          },
          {
            timeout: 30000,
          }
        );
      }, []);

      async function handleSubmit(e){
        e.preventDefault()

        await onSubmit({
           githubUsername,
           techs,
           latitude,
           longitude
        });

        setGithubUsername('');
        setTechs('');
      }

    return (
        <form onSubmit={handleSubmit}>
          <div className="input-block">
            <label htmlFor="githubUsername">Usuário do github</label>
            <input 
              name="githubUsername" 
              id="githubUsername" 
              required
              value={githubUsername}
              onChange={e => setGithubUsername(e.target.value)}
            />
          </div>
  
          <div className="input-block">
            <label htmlFor="techs">Tecnologias</label>
            <input 
              name="techs" 
              id="techs" 
              required 
              value={techs}
              onChange={e => setTechs(e.target.value)}
            />
          </div>

          <div className="input-group">
            <div className="input-block">
              <label htmlFor="latitude">Latitude</label>
              <input 
                type="number" 
                name="latitude" 
                id="latitude" 
                required value={latitude}
                onChange={e => setlatitude(e.target.value)}
              />
            </div>

            <div className="input-block">
              <label htmlFor="longitude">Longitude</label>
              <input 
                type="number"
                name="longitude" 
                id="longitude" 
                required value={longitude}
                onChange={e => setlongitude(e.target.value)}
              />
            </div>

            <button type="submit">Salvar</button>
          </div>
        </form>
    )
}

export default DevForm