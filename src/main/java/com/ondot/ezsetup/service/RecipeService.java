package com.ondot.ezsetup.service;

import com.ondot.ezsetup.domain.Recipe;

import java.util.Set;

public interface RecipeService {

    Set<Recipe> getRecipes();

    Recipe findById(Long l);
}
