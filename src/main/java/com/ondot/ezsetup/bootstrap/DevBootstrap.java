package com.ondot.ezsetup.bootstrap;

import com.ondot.ezsetup.model.Author;
import com.ondot.ezsetup.model.Book;
import com.ondot.ezsetup.model.Publisher;
import com.ondot.ezsetup.repositories.AuthorRepository;
import com.ondot.ezsetup.repositories.BookRepository;
import com.ondot.ezsetup.repositories.PublisherRepository;
import org.springframework.context.ApplicationListener;
import org.springframework.context.event.ContextRefreshedEvent;
import org.springframework.stereotype.Component;

@Component
public class DevBootstrap implements ApplicationListener<ContextRefreshedEvent>{

    private AuthorRepository authorRepository;
    private BookRepository bookRepository;
    private PublisherRepository publisherRepository;

    public DevBootstrap(AuthorRepository authorRepository, BookRepository bookRepository, PublisherRepository publisherRepository) {
        this.authorRepository = authorRepository;
        this.bookRepository = bookRepository;
        this.publisherRepository = publisherRepository;
    }

    @Override
    public void onApplicationEvent(ContextRefreshedEvent event) {
        initData();
    }

    private void initData(){

        Publisher publisher = new Publisher();
        publisher.setName("foo");

        publisherRepository.save(publisher);

        //Eric
        Author eric = new Author("Eric", "Evans");
        Book ddd = new Book("Domain Driven Design", "1234", publisher);
        eric.getBooks().add(ddd);
        ddd.getAuthors().add(eric);

        authorRepository.save(eric);
        bookRepository.save(ddd);

        //Rod
        Author rod = new Author("Rod", "Johnson");
        Book noEJB = new Book("J2EE Development without EJB", "23444", publisher);

        authorRepository.save(rod);
        bookRepository.save(noEJB);

    }


}
