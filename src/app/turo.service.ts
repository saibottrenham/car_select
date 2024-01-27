import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TuroService {
  constructor(private http: HttpClient) {}

  getUpcomingTrips() {
    const headers = new HttpHeaders({
      'authority': 'turo.com',
      'accept': '*/*',
      'accept-language': 'en-US,en;q=0.9,de;q=0.8',
      'cookie': 'osano_consentmanager_uuid=fd107534-73f5-4275-a42d-f099746e9d39; osano_consentmanager=hvVR-_3ylcAOZ8srRupWY861u5w3aIi3wogCdC-0xQrnDvyxZp6Gupn2OW4Avb8zx4I4fa-57yYqYvQAny8zIV1G8aS5HmcbwOx5ezhQRneKp1z1sKUXmimRGe-_fHVpd7_XiELreSsm7TxNvkUIJMbAeHRdKOyY8HRePgsoISZ0v8wQ44r1Rs1JTNbPS5dHxsy40ew8U1r-mncTgWThV8Rz-866Sobhz8gQgQtyK79rbiAB5CR0f6ml1hymHZL6sOeXg0ogfGcvf0_Sxb4enr6l5HtvTV3qhJsG0w==; rr_u_cid=nOQC8fqbRv6CRC8e4CZ5KA; _ga=GA1.1.2004607156.1703475682; ajs_user_id=qzu0-FvXQCWozkw0bAJARQ; ajs_anonymous_id=3934b967-4c5a-4eb6-b353-f5ebdf538c8b; _gcl_au=1.1.113757309.1703475689; _fbp=fb.1.1703475689344.1705643150; sd_client_id=0128426a-29ac-472f-831c-71b522c0b5d8; _tt_enable_cookie=1; _ttp=FwRR4r11k9Y_slzIwg3F7zNLBEA; cookie_acceptance=1; __ssid=33bb32338d6b1730f4d152b275af68a; sid=_dq0ba6-TeG6rqdibC4pJA; times={%22endDate%22:%2202/01/2024%22%2C%22endTime%22:%2210:00%22%2C%22startDate%22:%2201/29/2024%22%2C%22startTime%22:%2210:00%22}; __cf_bm=BRE1SbnSX59631XbEJKM48Xa7NSrYuquC_GwBW.8DRQ-1706341350-1-AdQZioLO+OML829vK9S8mApz2phCfhXsU9B0+67QqESUXtei/88b0xtofwjgZgWvjF6duRU8faNJ/2z9YnhT+3CyB0nEAotUR3Nhy+N5+bKs; SPRING_SECURITY_REMEMBER_ME_COOKIE=bStabkNmdVFSV3BRekVHUlJuNjJpdz09OldncXVWbFNCRkdmUnVjV0NZSUQwY1E9PQ; JSESSIONID=43a2be1a-9c64-4ce3-9ec3-67ab4de58e9d; preferredLocale=en_US; _rdt_uuid=1703475682310.c27b57bd-9512-48db-aaed-33f76a43b67e; _uetsid=364338d0bcd911ee9fd47955d757bbe5; _uetvid=bcdce520671711eea81c1972c83acd5f; _ga_CJPLS11T4Y=GS1.1.1706341351.5.1.1706341659.60.0.0',
      'referer': 'https://turo.com/au/en/trips/booked',
      'origin': 'https://turo.com/au/en/trips/booked',
      'sec-ch-ua': '"Not_A Brand";v="8", "Chromium";v="120", "Google Chrome";v="120"',
      'sec-ch-ua-mobile': '?0',
      'sec-ch-ua-platform': '"macOS"',
      'sec-fetch-dest': 'empty',
      'sec-fetch-mode': 'cors',
      'sec-fetch-site': 'same-origin',
      'traceparent': '00-a3ded40dda8d8b735adcd1f93025564b-8d04a2ada7674058-01',
      'tracestate': '721478@nr=0-1-3069551-1022796076-8d04a2ada7674058----1706341667321',
      'user-agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36'
    });

    return this.http.get('https://turo.com/api/feeds/upcoming-trips?driverRoles=HOST', { headers });
  }
}
