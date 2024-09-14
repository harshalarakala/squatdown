import React, { useState, useEffect } from 'react';
import Sidebar from './components/Sidebar';
import MapView from './components/MapView';
import SlidingView from './components/SlidingView';
import { Property } from './types';

const App = () => {
  const mockProperties: Property[] = [
    {
      id: 1,
      address: '1600 Pennsylvania Ave NW, Washington, DC 20500',
      phone: '202-456-1111',
      loanAmount: 500000,
      interestRate: 3.5,
      activeBids: 4,
      lat: 38.8977,
      lng: -77.0365,
    },
    {
      id: 2,
      address: '101 Independence Ave SE, Washington, DC 20540',
      phone: '202-707-5000',
      loanAmount: 750000,
      interestRate: 3.2,
      activeBids: 6,
      lat: 38.8887,
      lng: -77.0042,
    },
    {
      id: 3,
      address: '2 Lincoln Memorial Cir NW, Washington, DC 20037',
      phone: '202-426-6841',
      loanAmount: 600000,
      interestRate: 3.8,
      activeBids: 3,
      lat: 38.8893,
      lng: -77.0502,
    },
    {
      id: 4,
      address: '3001 Connecticut Ave NW, Washington, DC 20008',
      phone: '202-633-4800',
      loanAmount: 450000,
      interestRate: 4.1,
      activeBids: 5,
      lat: 38.9296,
      lng: -77.0497,
    },
    {
      id: 5,
      address: '401 F St NW, Washington, DC 20001',
      phone: '202-272-2448',
      loanAmount: 550000,
      interestRate: 3.6,
      activeBids: 2,
      lat: 38.8976,
      lng: -77.0175,
    },
    {
      id: 6,
      address: '8600 Rockville Pike, Bethesda, MD 20894',
      phone: '301-496-4000',
      loanAmount: 680000,
      interestRate: 3.3,
      activeBids: 7,
      lat: 39.0005,
      lng: -77.1026,
    },
    {
      id: 7,
      address: '10903 New Hampshire Ave, Silver Spring, MD 20993',
      phone: '301-796-8240',
      loanAmount: 520000,
      interestRate: 3.9,
      activeBids: 4,
      lat: 39.0339,
      lng: -76.9817,
    },
    {
      id: 8,
      address: '1 Veterans Dr, Fort Howard, MD 21052',
      phone: '410-477-1800',
      loanAmount: 480000,
      interestRate: 4.2,
      activeBids: 3,
      lat: 39.3143,
      lng: -76.4458,
    },
    {
      id: 9,
      address: '100 Museum Dr, Chestertown, MD 21620',
      phone: '410-778-3700',
      loanAmount: 420000,
      interestRate: 4.0,
      activeBids: 5,
      lat: 39.2082,
      lng: -76.0692,
    },
    {
      id: 10,
      address: '1201 S Joyce St, Arlington, VA 22202',
      phone: '703-415-2400',
      loanAmount: 590000,
      interestRate: 3.7,
      activeBids: 6,
      lat: 38.8628,
      lng: -77.0632,
    },
    {
      id: 11,
      address: '1000 Jefferson Davis Hwy, Arlington, VA 22202',
      phone: '703-607-8000',
      loanAmount: 710000,
      interestRate: 3.4,
      activeBids: 8,
      lat: 38.8690,
      lng: -77.0583,
    },
    {
      id: 12,
      address: '2400 Eisenhower Ave, Alexandria, VA 22314',
      phone: '703-746-4356',
      loanAmount: 540000,
      interestRate: 3.8,
      activeBids: 4,
      lat: 38.8024,
      lng: -77.0712,
    },
    {
      id: 13,
      address: '1750 Tysons Blvd, McLean, VA 22102',
      phone: '703-506-4300',
      loanAmount: 820000,
      interestRate: 3.1,
      activeBids: 9,
      lat: 38.9187,
      lng: -77.2233,
    },
    {
      id: 14,
      address: '1 Dulles Airport, Dulles, VA 20166',
      phone: '703-572-2700',
      loanAmount: 630000,
      interestRate: 3.6,
      activeBids: 5,
      lat: 38.9531,
      lng: -77.4565,
    },
    {
      id: 15,
      address: '1400 16th St NW, Washington, DC 20036',
      phone: '202-387-6030',
      loanAmount: 570000,
      interestRate: 3.9,
      activeBids: 3,
      lat: 38.9091,
      lng: -77.0363,
    },
    {
      id: 16,
      address: '3101 Wisconsin Ave NW, Washington, DC 20016',
      phone: '202-537-6200',
      loanAmount: 690000,
      interestRate: 3.5,
      activeBids: 7,
      lat: 38.9334,
      lng: -77.0720,
    },
    {
      id: 17,
      address: '4101 Reservoir Rd NW, Washington, DC 20007',
      phone: '202-444-2000',
      loanAmount: 730000,
      interestRate: 3.3,
      activeBids: 8,
      lat: 38.9113,
      lng: -77.0769,
    },
    {
      id: 18,
      address: '3800 Reservoir Rd NW, Washington, DC 20007',
      phone: '202-687-0100',
      loanAmount: 650000,
      interestRate: 3.7,
      activeBids: 6,
      lat: 38.9097,
      lng: -77.0738,
    },
    {
      id: 19,
      address: '2700 Martin Luther King Jr Ave SE, Washington, DC 20032',
      phone: '202-562-0200',
      loanAmount: 480000,
      interestRate: 4.1,
      activeBids: 4,
      lat: 38.8464,
      lng: -76.9952,
    },
    {
      id: 20,
      address: '1500 East Capitol St NE, Washington, DC 20003',
      phone: '202-543-8600',
      loanAmount: 560000,
      interestRate: 3.8,
      activeBids: 5,
      lat: 38.8898,
      lng: -76.9829,
    },
    {
      id: 21,
      address: '7100 Baltimore Ave, College Park, MD 20740',
      phone: '301-405-1000',
      loanAmount: 510000,
      interestRate: 4.0,
      activeBids: 3,
      lat: 38.9807,
      lng: -76.9369,
    },
    {
      id: 22,
      address: '1 Hospital Dr, Glen Burnie, MD 21061',
      phone: '410-787-4000',
      loanAmount: 470000,
      interestRate: 4.2,
      activeBids: 2,
      lat: 39.1409,
      lng: -76.6261,
    },
    {
      id: 23,
      address: '100 Hospital Rd, Prince Frederick, MD 20678',
      phone: '410-535-4000',
      loanAmount: 430000,
      interestRate: 4.3,
      activeBids: 1,
      lat: 38.5507,
      lng: -76.5892,
    },
    {
      id: 24,
      address: '1500 Forest Glen Rd, Silver Spring, MD 20910',
      phone: '301-589-1810',
      loanAmount: 580000,
      interestRate: 3.7,
      activeBids: 6,
      lat: 39.0158,
      lng: -77.0447,
    },
    {
      id: 25,
      address: '9000 Rockville Pike, Bethesda, MD 20892',
      phone: '301-496-4000',
      loanAmount: 700000,
      interestRate: 3.4,
      activeBids: 8,
      lat: 38.9956,
      lng: -77.1031,
    },
    {
      id: 26,
      address: '1 Infinite Loop, Cupertino, CA 95014',
      phone: '408-996-1010',
      loanAmount: 750000,
      interestRate: 2.8,
      activeBids: 7,
      lat: 37.3318,
      lng: -122.0312,
    },
    {
      id: 27,
      address: '350 Fifth Avenue, New York, NY 10118',
      phone: '212-736-3100',
      loanAmount: 600000,
      interestRate: 4.0,
      activeBids: 2,
      lat: 40.7484,
      lng: -73.9857,
    },
    {
      id: 28,
      address: '233 S Wacker Dr, Chicago, IL 60606',
      phone: '312-875-9696',
      loanAmount: 550000,
      interestRate: 3.9,
      activeBids: 5,
      lat: 41.8789,
      lng: -87.6359,
    },
    {
      id: 29,
      address: '3655 S Las Vegas Blvd, Las Vegas, NV 89109',
      phone: '702-946-7000',
      loanAmount: 680000,
      interestRate: 3.5,
      activeBids: 6,
      lat: 36.1126,
      lng: -115.1767,
    },
    {
      id: 30,
      address: '1 Panther Pkwy, Sunrise, FL 33323',
      phone: '954-835-7000',
      loanAmount: 520000,
      interestRate: 4.1,
      activeBids: 3,
      lat: 26.1583,
      lng: -80.3246,
    },
    {
      id: 31,
      address: '1 AT&T Way, Arlington, TX 76011',
      phone: '817-892-4000',
      loanAmount: 590000,
      interestRate: 3.7,
      activeBids: 4,
      lat: 32.7473,
      lng: -97.0945,
    },
    {
      id: 32,
      address: '1 Twins Way, Minneapolis, MN 55403',
      phone: '612-659-3400',
      loanAmount: 480000,
      interestRate: 4.2,
      activeBids: 2,
      lat: 44.9817,
      lng: -93.2776,
    },
    {
      id: 33,
      address: '1 Patriot Pl, Foxborough, MA 02035',
      phone: '508-543-8200',
      loanAmount: 620000,
      interestRate: 3.6,
      activeBids: 5,
      lat: 42.0909,
      lng: -71.2643,
    },
    {
      id: 34,
      address: '1 AMB Dr, East Rutherford, NJ 07073',
      phone: '201-935-8500',
      loanAmount: 710000,
      interestRate: 3.3,
      activeBids: 7,
      lat: 40.8135,
      lng: -74.0745,
    },
    {
      id: 35,
      address: '1 Cardinals Dr, Glendale, AZ 85305',
      phone: '623-433-7101',
      loanAmount: 540000,
      interestRate: 3.9,
      activeBids: 4,
      lat: 33.5276,
      lng: -112.2626,
    },
    {
      id: 36,
      address: '1 Arrowhead Dr, Kansas City, MO 64129',
      phone: '816-920-9300',
      loanAmount: 500000,
      interestRate: 4.0,
      activeBids: 3,
      lat: 39.0489,
      lng: -94.4839,
    },
    {
      id: 37,
      address: '1 Titans Way, Nashville, TN 37213',
      phone: '615-565-4300',
      loanAmount: 530000,
      interestRate: 3.8,
      activeBids: 5,
      lat: 36.1665,
      lng: -86.7713,
    },
    {
      id: 38,
      address: '1 Broncos Pkwy, Englewood, CO 80112',
      phone: '720-258-3333',
      loanAmount: 570000,
      interestRate: 3.7,
      activeBids: 6,
      lat: 39.5680,
      lng: -104.8380,
    },
    {
      id: 39,
      address: '1 Bills Dr, Orchard Park, NY 14127',
      phone: '716-648-1800',
      loanAmount: 490000,
      interestRate: 4.1,
      activeBids: 2,
      lat: 42.7738,
      lng: -78.7870,
    },
    {
      id: 40,
      address: '1 Lambeau Field Dr, Green Bay, WI 54304',
      phone: '920-569-7500',
      loanAmount: 560000,
      interestRate: 3.8,
      activeBids: 4,
      lat: 44.5013,
      lng: -88.0622,
    },
    {
      id: 41,
      address: '1 Winning Dr, Foxborough, MA 02035',
      phone: '508-543-8200',
      loanAmount: 640000,
      interestRate: 3.5,
      activeBids: 7,
      lat: 42.0909,
      lng: -71.2643,
    },
  ];

  const [properties, setProperties] = useState<Property[]>(mockProperties);
  const [visibleProperties, setVisibleProperties] = useState<Property[]>([]);

  /**
 *useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('http://localhost:5000/api/properties');
        if (response.ok) {
          const data: Property[] = await response.json();
          setProperties(data);
        } else {
          console.error('Failed to fetch data from the backend');
        }
      } catch (error) {
        console.error('Error fetching property data:', error);
      }
    };

    fetchData();
  }, []);
 */

  const handleVisiblePropertiesChange = (visibleProps: Property[]) => {
    setVisibleProperties(visibleProps);
  };

  return (
    <div className="flex">
      <div className="w-full md:w-1/3 lg:w-1/4">
        <Sidebar properties={visibleProperties} />
      </div>

      <div className="flex-1">
        <MapView properties={properties} onVisiblePropertiesChange={handleVisiblePropertiesChange} />
      </div>
      <SlidingView />
    </div>
  );
}

export default App;