package com.example.showcase;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@RestController
@CrossOrigin(origins = {"http://localhost:3000", "https://showcase-beta-nine.vercel.app"})
@SpringBootApplication
public class ShowcaseApplication {

	public static void main(String[] args) {
		SpringApplication.run(ShowcaseApplication.class, args);
	}
	@GetMapping("/api")
	public String getData() {
		return "API is working";
	}
}
