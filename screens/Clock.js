import React, { useState } from 'react';
import { Text, View, Button, TextInput, Picker } from "react-native";
import Clock from 'react-live-clock';

export default class ClockScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      timezone: 'US/Pacific',
      inputText: '',
      country: 'US'
    };
  }
  handleCountryChange = (itemValue) => {
    this.setState({ country: itemValue });
    this.setState({ timezone: this.getTimeZone(itemValue) });
  };

  getTimeZone = (country) => {
    const timezones = {
      'US': 'US/Pacific',
      'IN': 'Asia/Kolkata',
      'AU': 'Australia/Sydney',
      'GB': 'Europe/London',
      'FR': 'Europe/Paris',
      'AF': 'Asia/Kabul',
      'AL': 'Europe/Tirane',
      'DZ': 'Africa/Algiers',
      'AD': 'Europe/Andorra',
      'AO': 'Africa/Luanda',
      'AG': 'America/Antigua',
      'AR': 'America/Buenos_Aires',
      'AM': 'Asia/Yerevan',
      'AT': 'Europe/Vienna',
      'AZ': 'Asia/Baku',
      'BS': 'America/Nassau',
      'BH': 'Asia/Bahrain',
      'BD': 'Asia/Dhaka',
      'BB': 'America/Barbados',
      'BY': 'Europe/Minsk',
      'BE': 'Europe/Brussels',
      'BZ': 'America/Belize',
      'BJ': 'Africa/Porto-Novo',
      'BT': 'Asia/Thimphu',
      'BO': 'America/La_Paz',
      'BA': 'Europe/Sarajevo',
      'BW': 'Africa/Gaborone',
      'BR': 'America/Rio_de_Janeiro',
      'BN': 'Asia/Brunei',
      'BG': 'Europe/Sofia',
      'BF': 'Africa/Ouagadougou',
      'BI': 'Africa/Bujumbura',
      'KH': 'Asia/Phnom_Penh',
      'CM': 'Africa/Douala',
      'CA': 'America/Toronto',
      'CF': 'Africa/Bangui',
      'TD': 'Africa/Ndjamena',
      'CL': 'America/Santiago',
      'CN': 'Asia/Shanghai',
      'CO': 'America/Bogota',
      'KM': 'Indian/Comoro',
      'CG': 'Africa/Brazzaville',
      'CD': 'Africa/Kinshasa',
      'CR': 'America/Costa_Rica',
      'CI': 'Africa/Abidjan',
      'HR': 'Europe/Zagreb',
      'CU': 'America/Havana',
      'CY': 'Asia/Nicosia',
      'CZ': 'Europe/Prague',
      'DK': 'Europe/Copenhagen',
      'DJ': 'Africa/Djibouti',
      'DM': 'America/Dominica',
      'DO': 'America/Santo_Domingo',
      'EC': 'America/Quito',
      'EG': 'Africa/Cairo',
      'SV': 'America/El_Salvador',
      'GQ': 'Africa/Malabo',
      'ER': 'Africa/Asmara',
      'EE': 'Europe/Tallinn',
      'ET': 'Africa/Addis_Ababa',
      'FJ': 'Pacific/Fiji',
      'FI': 'Europe/Helsinki',
      'GA': 'Africa/Libreville',
      'GM': 'Africa/Banjul',
      'GE': 'Asia/Tbilisi',
      'DE': 'Europe/Berlin',
      'GH': 'Africa/Accra',
      'GR': 'Europe/Athens',
      'GD': 'America/Grenada',
      'GT': 'America/Guatemala',
      'GN': 'Africa/Conakry',
      'GW': 'Africa/Bissau',
      'GY': 'America/Guyana',
      'HT': 'America/Port-au-Prince',
      'HN': 'America/Tegucigalpa',
      'HU': 'Europe/Budapest',
      'IS': 'Atlantic/Reykjavik',
      'ID': 'Asia/Jakarta',
      'IR': 'Asia/Tehran',
      'IQ': 'Asia/Baghdad',
      'IE': 'Europe/Dublin',
      'IL': 'Asia/Jerusalem',
      'IT': 'Europe/Rome',
      'JM': 'America/Jamaica',
      'JP': 'Asia/Tokyo',
      'JO': 'Asia/Amman',
      'KZ': 'Asia/Almaty',
      'KE': 'Africa/Nairobi',
      'KI': 'Pacific/Tarawa',
      'KP': 'Asia/Pyongyang',
      'KR': 'Asia/Seoul',
      'XK': 'Europe/Pristina',
      'KW': 'Asia/Kuwait',
      'KG': 'Asia/Bishkek',
      'LA': 'Asia/Vientiane',
      'LV': 'Europe/Riga',
      'LB': 'Asia/Beirut',
      'LS': 'Africa/Maseru',
      'LR': 'Africa/Monrovia',
      'LY': 'Africa/Tripoli',
      'LT': 'Europe/Vilnius',
      'LU': 'Europe/Luxembourg',
      'MK': 'Europe/Skopje',
      'MG': 'Indian/Antananarivo',
      'MW': 'Africa/Blantyre',
      'MY': 'Asia/Kuala_Lumpur',
      'MV': 'Indian/Maldives',
      'ML': 'Africa/Bamako',
      'MT': 'Europe/Malta',
      'MH': 'Pacific/Majuro',
      'MR': 'Africa/Nouakchott',
      'MU': 'Indian/Mauritius',
      'MX': 'America/Mexico_City',
      'FM': 'Pacific/Chuuk',
      'MD': 'Europe/Chisinau',
      'MC': 'Europe/Monaco',
      'MN': 'Asia/Ulaanbaatar',
      'ME': 'Europe/Podgorica',
      'MA': 'Africa/Casablanca',
      'MZ': 'Africa/Maputo',
      'MM': 'Asia/Rangoon',
      'NA': 'Africa/Windhoek',
      'NR': 'Pacific/Nauru',
      'NP': 'Asia/Kathmandu',
      'NL': 'Europe/Amsterdam',
      'NZ': 'Pacific/Auckland',
      'NI': 'America/Managua',
      'NE': 'Africa/Niamey',
      'NG': 'Africa/Lagos',
      'NO': 'Europe/Oslo',
      'OM': 'Asia/Muscat',
      'PK': 'Asia/Karachi',
      'PW': 'Pacific/Palau',
      'PA': 'America/Panama',
      'PG': 'Pacific/Port_Moresby',
      'PY': 'America/Asuncion',
      'PE': 'America/Lima',
      'PH': 'Asia/Manila',
      'PL': 'Europe/Warsaw',
      'PT': 'Europe/Lisbon',
      'QA': 'Asia/Qatar',
      'RO': 'Europe/Bucharest',
      'RU': 'Europe/Moscow',
      'RW': 'Africa/Kigali',
      'KN': 'America/St_Kitts',
      'LC': 'America/St_Lucia',
      'VC': 'America/St_Vincent',
      'WS': 'Pacific/Apia',
      'SM': 'Europe/San_Marino',
      'ST': 'Africa/Sao_Tome',
      'SA': 'Asia/Riyadh',
      'SN': 'Africa/Dakar',
      'RS': 'Europe/Belgrade',
      'SC': 'Indian/Mahe',
      'SL': 'Africa/Freetown',
      'SG': 'Asia/Singapore',
      'SX': 'America/Lower_Princes',
      'SK': 'Europe/Bratislava',
      'SI': 'Europe/Ljubljana',
      'SB': 'Pacific/Guadalcanal',
      'SO': 'Africa/Mogadishu',
      'ZA': 'Africa/Johannesburg',
      'SS': 'Africa/Juba',
      'ES': 'Europe/Madrid',
      'LK': 'Asia/Colombo',
      'SD': 'Africa/Khartoum',
      'SR': 'America/Paramaribo',
      'SZ': 'Africa/Mbabane',
      'SE': 'Europe/Stockholm',
      'CH': 'Europe/Zurich',
      'SY': 'Asia/Damascus',
      'TJ': 'Asia/Dushanbe',
      'TZ': 'Africa/Dar_es_Salaam',
      'TH': 'Asia/Bangkok',
      'TL': 'Asia/Dili',
      'TG': 'Africa/Lome',
      'TO': 'Pacific/Tongatapu',
      'TT': 'America/Port_of_Spain',
      'TN': 'Africa/Tunis',
      'TR': 'Europe/Istanbul',
      'TM': 'Asia/Ashgabat',
      'TV': 'Pacific/Funafuti',
      'UG': 'Africa/Kampala',
      'UA': 'Europe/Kiev',
      'AE': 'Asia/Dubai',
      'UY': 'America/Montevideo',
      'UZ': 'Asia/Tashkent',
      'VU': 'Pacific/Efate',
      'VA': 'Europe/Vatican',
      'VE': 'America/Caracas',
      'VN': 'Asia/Hanoi',
      'YE': 'Asia/Sana',
      'ZM': 'Africa/Lusaka',
      'ZW': 'Africa/Harare'
    };
    return timezones[country] || 'US/Pacific';
  };

  render() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', padding: 20, backgroundColor: '#fbf79f', borderRadius: 10}}>
        <Clock format={'h:mm:ss A'} ticking={true} timezone={this.state.timezone} style={{ fontSize: 205, color: '#000', fontWeight: "bold", fontFamily: 'Arial Black' }} />
        <Clock format={'dddd, MMMM Mo, YYYY'} ticking={true} timezone={this.state.timezone} style={{ fontSize: 45, color: '#333', fontFamily: 'Arial Black'}} />
        <Picker
          selectedValue={this.state.country}
          style={{ height: 50, width: 150, margin: 20}}
          onValueChange={this.handleCountryChange}
        >
          <Picker.Item label="Afghanistan" value="AF" />
          <Picker.Item label="Albania" value="AL" />
          <Picker.Item label="Algeria" value="DZ" />
          <Picker.Item label="Andorra" value="AD" />
          <Picker.Item label="Angola" value="AO" />
          <Picker.Item label="Antigua and Barbuda" value="AG" />
          <Picker.Item label="Argentina" value="AR" />
          <Picker.Item label="Armenia" value="AM" />
          <Picker.Item label="Australia" value="AU" />
          <Picker.Item label="Austria" value="AT" />
          <Picker.Item label="Azerbaijan" value="AZ" />
          <Picker.Item label="Bahamas" value="BS" />
          <Picker.Item label="Bahrain" value="BH" />
          <Picker.Item label="Bangladesh" value="BD" />
          <Picker.Item label="Barbados" value="BB" />
          <Picker.Item label="Belarus" value="BY" />
          <Picker.Item label="Belgium" value="BE" />
          <Picker.Item label="Belize" value="BZ" />
          <Picker.Item label="Benin" value="BJ" />
          <Picker.Item label="Bhutan" value="BT" />
          <Picker.Item label="Bolivia" value="BO" />
          <Picker.Item label="Bosnia and Herzegovina" value="BA" />
          <Picker.Item label="Botswana" value="BW" />
          <Picker.Item label="Brazil" value="BR" />
          <Picker.Item label="Brunei" value="BN" />
          <Picker.Item label="Bulgaria" value="BG" />
          <Picker.Item label="Burkina Faso" value="BF" />
          <Picker.Item label="Burundi" value="BI" />
          <Picker.Item label="Cambodia" value="KH" />
          <Picker.Item label="Cameroon" value="CM" />
          <Picker.Item label="Canada" value="CA" />
          <Picker.Item label="Central African Republic" value="CF" />
          <Picker.Item label="Chad" value="TD" />
          <Picker.Item label="Chile" value="CL" />
          <Picker.Item label="China" value="CN" />
          <Picker.Item label="Colombia" value="CO" />
          <Picker.Item label="Comoros" value="KM" />
          <Picker.Item label="Congo" value="CG" />
          <Picker.Item label="Congo (DRC)" value="CD" />
          <Picker.Item label="Costa Rica" value="CR" />
          <Picker.Item label="Côte d'Ivoire" value="CI" />
          <Picker.Item label="Croatia" value="HR" />
          <Picker.Item label="Cuba" value="CU" />
          <Picker.Item label="Cyprus" value="CY" />
          <Picker.Item label="Czech Republic" value="CZ" />
          <Picker.Item label="Denmark" value="DK" />
          <Picker.Item label="Djibouti" value="DJ" />
          <Picker.Item label="Dominica" value="DM" />
          <Picker.Item label="Dominican Republic" value="DO" />
          <Picker.Item label="Ecuador" value="EC" />
          <Picker.Item label="Egypt" value="EG" />
          <Picker.Item label="El Salvador" value="SV" />
          <Picker.Item label="Equatorial Guinea" value="GQ" />
          <Picker.Item label="Eritrea" value="ER" />
          <Picker.Item label="Estonia" value="EE" />
          <Picker.Item label="Ethiopia" value="ET" />
          <Picker.Item label="Fiji" value="FJ" />
          <Picker.Item label="Finland" value="FI" />
          <Picker.Item label="France" value="FR" />
          <Picker.Item label="Gabon" value="GA" />
          <Picker.Item label="Gambia" value="GM" />
          <Picker.Item label="Georgia" value="GE" />
          <Picker.Item label="Germany" value="DE" />
          <Picker.Item label="Ghana" value="GH" />
          <Picker.Item label="Greece" value="GR" />
          <Picker.Item label="Grenada" value="GD" />
          <Picker.Item label="Guatemala" value="GT" />
          <Picker.Item label="Guinea" value="GN" />
          <Picker.Item label="Guinea-Bissau" value="GW" />
          <Picker.Item label="Guyana" value="GY" />
          <Picker.Item label="Haiti" value="HT" />
          <Picker.Item label="Honduras" value="HN" />
          <Picker.Item label="Hungary" value="HU" />
          <Picker.Item label="Iceland" value="IS" />
          <Picker.Item label="India" value="IN" />
          <Picker.Item label="Indonesia" value="ID" />
          <Picker.Item label="Iran" value="IR" />
          <Picker.Item label="Iraq" value="IQ" />
          <Picker.Item label="Ireland" value="IE" />
          <Picker.Item label="Israel" value="IL" />
          <Picker.Item label="Italy" value="IT" />
          <Picker.Item label="Jamaica" value="JM" />
          <Picker.Item label="Japan" value="JP" />
          <Picker.Item label="Jordan" value="JO" />
          <Picker.Item label="Kazakhstan" value="KZ" />
          <Picker.Item label="Kenya" value="KE" />
          <Picker.Item label="Kiribati" value="KI" />
          <Picker.Item label="North Korea" value="KP" />
          <Picker.Item label="South Korea" value="KR" />
          <Picker.Item label="Kosovo" value="XK" />
          <Picker.Item label="Kuwait" value="KW" />
          <Picker.Item label="Kyrgyzstan" value="KG" />
          <Picker.Item label="Laos" value="LA" />
          <Picker.Item label="Latvia" value="LV" />
          <Picker.Item label="Lebanon" value="LB" />
          <Picker.Item label="Lesotho" value="LS" />
          <Picker.Item label="Liberia" value="LR" />
          <Picker.Item label="Libya" value="LY" />
          <Picker.Item label="Lithuania" value="LT" />
          <Picker.Item label="Luxembourg" value="LU" />
          <Picker.Item label="Macedonia" value="MK" />
          <Picker.Item label="Madagascar" value="MG" />
          <Picker.Item label="Malawi" value="MW" />
          <Picker.Item label="Malaysia" value="MY" />
          <Picker.Item label="Maldives" value="MV" />
          <Picker.Item label="Mali" value="ML" />
          <Picker.Item label="Malta" value="MT" />
          <Picker.Item label="Marshall Islands" value="MH" />
          <Picker.Item label="Mauritania" value="MR" />
          <Picker.Item label="Mauritius" value="MU" />
          <Picker.Item label="Mexico" value="MX" />
          <Picker.Item label="Micronesia" value="FM" />
          <Picker.Item label="Moldova" value="MD" />
          <Picker.Item label="Monaco" value="MC" />
          <Picker.Item label="Mongolia" value="MN" />
          <Picker.Item label="Montenegro" value="ME" />
          <Picker.Item label="Morocco" value="MA" />
          <Picker.Item label="Mozambique" value="MZ" />
          <Picker.Item label="Myanmar" value="MM" />
          <Picker.Item label="Namibia" value="NA" />
          <Picker.Item label="Nauru" value="NR" />
          <Picker.Item label="Nepal" value="NP" />
          <Picker.Item label="Netherlands" value="NL" />
          <Picker.Item label="New Zealand" value="NZ" />
          <Picker.Item label="Nicaragua" value="NI" />
          <Picker.Item label="Niger" value="NE" />
          <Picker.Item label="Nigeria" value="NG" />
          <Picker.Item label="Norway" value="NO" />
          <Picker.Item label="Oman" value="OM" />
          <Picker.Item label="Pakistan" value="PK" />
          <Picker.Item label="Palau" value="PW" />
          <Picker.Item label="Panama" value="PA" />
          <Picker.Item label="Papua New Guinea" value="PG" />
          <Picker.Item label="Paraguay" value="PY" />
          <Picker.Item label="Peru" value="PE" />
          <Picker.Item label="Philippines" value="PH" />
          <Picker.Item label="Poland" value="PL" />
          <Picker.Item label="Portugal" value="PT" />
          <Picker.Item label="Qatar" value="QA" />
          <Picker.Item label="Romania" value="RO" />
          <Picker.Item label="Russia" value="RU" />
          <Picker.Item label="Rwanda" value="RW" />
          <Picker.Item label="Saint Kitts and Nevis" value="KN" />
          <Picker.Item label="Saint Lucia" value="LC" />
          <Picker.Item label="Saint Vincent and the Grenadines" value="VC" />
          <Picker.Item label="Samoa" value="WS" />
          <Picker.Item label="San Marino" value="SM" />
          <Picker.Item label="Sao Tome and Principe" value="ST" />
          <Picker.Item label="Saudi Arabia" value="SA" />
          <Picker.Item label="Senegal" value="SN" />
          <Picker.Item label="Serbia" value="RS" />
          <Picker.Item label="Seychelles" value="SC" />
          <Picker.Item label="Sierra Leone" value="SL" />
          <Picker.Item label="Singapore" value="SG" />
          <Picker.Item label="Sint Maarten" value="SX" />
          <Picker.Item label="Slovakia" value="SK" />
          <Picker.Item label="Slovenia" value="SI" />
          <Picker.Item label="Solomon Islands" value="SB" />
          <Picker.Item label="Somalia" value="SO" />
          <Picker.Item label="South Africa" value="ZA" />
          <Picker.Item label="South Sudan" value="SS" />
          <Picker.Item label="Spain" value="ES" />
          <Picker.Item label="Sri Lanka" value="LK" />
          <Picker.Item label="Sudan" value="SD" />
          <Picker.Item label="Suriname" value="SR" />
          <Picker.Item label="Swaziland" value="SZ" />
          <Picker.Item label="Sweden" value="SE" />
          <Picker.Item label="Switzerland" value="CH" />
          <Picker.Item label="Syria" value="SY" />
          <Picker.Item label="Tajikistan" value="TJ" />
          <Picker.Item label="Tanzania" value="TZ" />
          <Picker.Item label="Thailand" value="TH" />
          <Picker.Item label="Timor-Leste" value="TL" />
          <Picker.Item label="Togo" value="TG" />
          <Picker.Item label="Tonga" value="TO" />
          <Picker.Item label="Trinidad and Tobago" value="TT" />
          <Picker.Item label="Tunisia" value="TN" />
          <Picker.Item label="Turkey" value="TR" />
          <Picker.Item label="Turkmenistan" value="TM" />
          <Picker.Item label="Tuvalu" value="TV" />
          <Picker.Item label="Uganda" value="UG" />
          <Picker.Item label="Ukraine" value="UA" />
          <Picker.Item label="United Arab Emirates" value="AE" />
          <Picker.Item label="United Kingdom" value="GB" />
          <Picker.Item label="United States" value="US" />
          <Picker.Item label="Uruguay" value="UY" />
          <Picker.Item label="Uzbekistan" value="UZ" />
          <Picker.Item label="Vanuatu" value="VU" />
          <Picker.Item label="Vatican City" value="VA" />
          <Picker.Item label="Venezuela" value="VE" />
          <Picker.Item label="Vietnam" value="VN" />
          <Picker.Item label="Yemen" value="YE" />
          <Picker.Item label="Zambia" value="ZM" />
          <Picker.Item label="Zimbabwe" value="ZW" />
        </Picker>
      </View>
    );
  }
}