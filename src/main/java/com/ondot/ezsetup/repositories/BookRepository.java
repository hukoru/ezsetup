package com.ondot.ezsetup.repositories;


import com.ondot.ezsetup.model.Book;
import org.springframework.data.repository.CrudRepository;


public interface BookRepository extends CrudRepository<Book, Long> {
}