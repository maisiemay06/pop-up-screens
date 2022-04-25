export default function CalendarHeader() {
  return (
    <div className="row date-header">
      <div className="col-1 time-header"></div>
      <div className="col border-right">
        SUN <span className="date">11</span>
      </div>
      <div className="col border-right">
        MON <span className="date">12</span>
      </div>
      <div className="col border-right">
        TUE <span className="date">13</span>
      </div>
      <div className="col border-right">
        WED <span className="date">14</span>
      </div>
      <div className="col border-right">
        THU <span className="date">15</span>
      </div>
      <div className="col border-right">
        FRI <span className="date">16</span>
      </div>
      <div className="col">
        SAT <span className="date">17</span>
      </div>
    </div>
  );
}
