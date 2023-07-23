﻿using AutoMapper;
using Model.DbEntities;
using Model.Dtos;

namespace WebApi.Helpers
{
    public class MappingProfiles : Profile
    {
        public MappingProfiles()
        {
            CreateMap<BookingForAddDto, Booking>()
                .ForMember(d => d.Date, o => o.MapFrom(s => DateTime.UtcNow));


            CreateMap<Schedule, ScheduleDto>()
             .ForMember(d => d.ClinicName, o => o.MapFrom(s => s.Clinic.Name))
             .ForMember(d => d.Day, o => o.MapFrom(s => s.DayOfWeek.ToString()));

        }
    }
}
