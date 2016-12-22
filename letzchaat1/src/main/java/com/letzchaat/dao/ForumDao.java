package com.letzchaat.dao;
import java.util.List;

import com.letzchaat.model.*;
public interface ForumDao {
	void addQuestion(Forum forum);
	List<Forum> viewQuestions();
	 void updateQuestion(Forum forum);
	 void deleteQuestion(int id);
	 Forum getQuestion(int id);
}
