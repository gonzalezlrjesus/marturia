import React, { useEffect, useState } from 'react';
import MainLayout from '../components/MainLayout';
import axios from 'axios';
import './Victims.scss';

const url = 'https://gist.githubusercontent.com/ebaranov/41bf38fdb1a2cb19a781/raw/fb097a60427717b262d5058633590749f366bd80/gistfile1.json'

const Victims = () => {
  useEffect(() => {
    document.title = 'Victims List - Testimony Database';
  }, []);

  const [data, setData] = useState({ countries: [] });

  useEffect(async () => {
    const result = await axios(
      url,
    );
    setData(result.data);
  }, []);


  return (
    <MainLayout>
      <div className="victims page">
        <div className="wrapper">
          <div className="searchSelect">
            <form>
              <input 
                className="search" 
                type="search" 
                placeholder="Search..." 
              />
            </form>
            <div className="selectSubmit">
               <select id="countries">
                  <option value="none" selected disabled hidden> 
                    Select a country 
                  </option> 
                {data.countries.map(item => (
                  <option
                    key={item.country}
                    value={item.country}>
                    {item.country}
                  </option>
                ))}
              </select>
              <button type="submit" className="btn">Submit</button>
            </div>
          </div>    
          <ul className="list">
            {mockData.map((item, index) => (
              <li key={item.id}>
                <div className="col">
                  <img
                    src={`https://i.pravatar.cc/160?img=${idsOfImages[index]}`}
                    alt="victim"
                  />
                </div>
                <div className="col">
                  <div className="name"><span>Name:</span> {item.name}</div>
                  <div className="age"><span>Age:</span> {item.age}</div>
                  <div className="location"><span>Location: </span> {item.location}</div>
                  <div className="status"><span>Status: </span> {item.status}</div>
                  <div className="more-btn">
                    <a href="/">More</a>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </MainLayout>
  );
};

const idsOfImages = [68, 47, 63, 51, 35, 17];
const mockData = [
  {
    id: 1,
    name: "John Doe",
    age: "42",
    location: "Baghdad, Iraq",
    status: "Unknown"
  },
  {
    id: 2,
    name: "Sara Smith",
    age: "50 - 55",
    location: "China",
    status: "Imprisoned"
  },
  {
    id: 3,
    name: "Mary Doe",
    age: "20",
    location: "Madrid, Spain",
    status: "Deceased"
  },
  {
    id: 4,
    name: "Darrel Poe",
    age: "35 - 40",
    location: "Colombia",
    status: "Unknown"
  },
  {
    id: 5,
    name: "Elizabeth Branch",
    age: "65",
    location: "Portugal",
    status: "Imprisoned"
  },
  {
    id: 6,
    name: "Phil Pace",
    age: "77 - 83",
    location: "Spain",
    status: "Deceased"
  }
];

export default Victims;
