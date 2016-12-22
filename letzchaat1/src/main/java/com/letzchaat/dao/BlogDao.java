package com.letzchaat.dao;

import java.util.List;

import com.letzchaat.model.Blog;

public interface BlogDao {
	void addBlog(Blog blog);
	List<Blog> viewBlogs();
	List<Blog> viewBlogs(String name);
	void updateBlog(Blog blog);
	void deleteBlog(int id);
	

}
