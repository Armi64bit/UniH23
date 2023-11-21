package tn.esprit.springprojecttwin2.entites;

import java.time.LocalDate;
import java.time.Period;
import java.time.ZoneId;
import java.util.Date;

public class DateUtils {
    public static int calculateAge(Date dateOfBirth) {
        LocalDate birthDate = dateOfBirth.toInstant().atZone(ZoneId.systemDefault()).toLocalDate();
        LocalDate currentDate = LocalDate.now();
        return Period.between(birthDate, currentDate).getYears();
    }
}
