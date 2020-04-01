package com.jwt.controller;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.apache.http.Header;
import org.apache.http.HttpEntity;
import org.apache.http.client.methods.CloseableHttpResponse;
import org.apache.http.client.methods.HttpGet;
import org.apache.http.impl.client.CloseableHttpClient;
import org.apache.http.impl.client.HttpClients;
import org.apache.http.util.EntityUtils;


//https://www.asterank.com/api/kepler?query={%22TPLANET%22:{%22$lt%22:320,%22$gt%22:290}}&limit=10
//above is exoplanet api

@RestController
@RequestMapping(path = "/exoplanet")
public class ExoplanetArchive {
	

	private final CloseableHttpClient httpClient = HttpClients.createDefault();
	
	@GetMapping(path="/", produces = "application/json")
	public String dataRelay() throws Exception {
		ExoplanetArchive obj = new ExoplanetArchive();
		String result = "";
		try {
			result = obj.sendGet();
		}finally {
			System.out.println("Error");
		}
		return result;
	}
	private String sendGet() throws Exception{
		HttpGet request = new HttpGet("https://exo.mast.stsci.edu/api/v0.1/exoplanets/TrES-2%20b/properties");
		
		String result = "";
		
		try(CloseableHttpResponse response = httpClient.execute(request)){
			//Get HttpResponse Status
			System.out.println(response.getStatusLine().toString());
			
			HttpEntity entity = response.getEntity();
			Header headers = entity.getContentType();
			System.out.println(headers);
			
			if(entity != null) {
				// return it as a String
				 result = EntityUtils.toString(entity);
				System.out.println(result);
			}
		}
		catch(Exception e) {
			System.out.println("API failed to execute "+ e);
		}
		
		return result;
	}
}
