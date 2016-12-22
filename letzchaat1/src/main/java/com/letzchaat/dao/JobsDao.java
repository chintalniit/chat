package com.letzchaat.dao;

import java.util.List;

import com.letzchaat.model.JobRegistration;
import com.letzchaat.model.Jobs;

public interface JobsDao {
   void addJob(Jobs job);
   List<Jobs> viewJobs();
   void deleteJob(int id);
   void updateJob(Jobs job);
   Jobs viewJob(int id);
   void registerJob(JobRegistration jobRegistration);
}
