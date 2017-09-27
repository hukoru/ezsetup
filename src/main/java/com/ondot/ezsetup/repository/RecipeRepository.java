package com.ondot.ezsetup.repository;

import com.ondot.ezsetup.domain.Recipe;
import org.springframework.data.repository.CrudRepository;

public  interface RecipeRepository extends CrudRepository<Recipe, Long> {
}
