import dayjs from 'dayjs';

import ArrowDropdownIcon from '@/shared/assets/icon/ic_arrow_drop_down.svg?react';
import ArrowDropupIcon from '@/shared/assets/icon/ic_arrow_drop_up.svg?react';
import ArrowLeftIcon from '@/shared/assets/icon/ic_arrow_left.svg?react';
import ArrowRightIcon from '@/shared/assets/icon/ic_arrow_right.svg?react';
import { Input } from '../input';
import { Popup } from '../popup/Popup';
import { SegmentedButton } from '../button';
import useDatePicker from '../../lib/hooks/useDatePicker';
import useDateViewMode from '../../lib/hooks/useDateViewMode';
import * as S from './DatePicker.styled';

interface CalendarProps {
  selectedDate: dayjs.Dayjs | null;
  selectDate: (date: dayjs.Dayjs) => void;
  handlePopupOpenStateChange: (state: boolean) => () => void;
}

const Calendar = ({
  selectedDate,
  selectDate,
  handlePopupOpenStateChange,
}: CalendarProps) => {
  const DATE_PICKER_VIEW_MODE_OPTIONS = [
    { key: 'month', label: 'Month' },
    { key: 'year', label: 'Year' },
  ];

  const { dateViewMode, handleDateViewModeSelect } = useDateViewMode();
  const {
    initDate,
    dates,
    handleDateSelect,
    handleMonthYearSelect,
    handleOtherDateView,
    handleOptionSelect,
  } = useDatePicker(
    selectedDate,
    selectDate,
    handleDateViewModeSelect,
    handlePopupOpenStateChange,
  );

  return (
    <S.CalendarWrapper>
      <S.CalendarHeader>
        <S.MonthYearNavButton
          type="button"
          aria-label={
            dateViewMode === 'date'
              ? 'view previous month date'
              : dateViewMode === 'month'
              ? 'view previous year date'
              : 'view previous years'
          }
          onClick={handleOtherDateView(dateViewMode, 'prev')}
        >
          <ArrowLeftIcon css={S.openCloseIcon} />
        </S.MonthYearNavButton>
        <S.DateLabelWrapper>
          <S.DateLabel>
            {dateViewMode === 'year'
              ? `${initDate.format('YYYY')} ~ ${initDate
                  .add(12, 'y')
                  .format('YYYY')}`
              : initDate.format('MMM YYYY')}
          </S.DateLabel>
          <S.ToggleButton
            type="button"
            aria-label={
              dateViewMode === 'date'
                ? 'view month/year list'
                : 'view date list'
            }
            onClick={handleDateViewModeSelect(
              dateViewMode === 'date' ? 'month' : 'date',
            )}
          >
            {dateViewMode === 'date' ? (
              <ArrowDropdownIcon css={S.openCloseIcon} />
            ) : (
              <ArrowDropupIcon css={S.openCloseIcon} />
            )}
          </S.ToggleButton>
        </S.DateLabelWrapper>
        <S.MonthYearNavButton
          type="button"
          aria-label={
            dateViewMode === 'date'
              ? 'view next month date'
              : dateViewMode === 'month'
              ? 'view next year date'
              : 'view next years'
          }
          onClick={handleOtherDateView(dateViewMode, 'next')}
        >
          <ArrowRightIcon css={S.openCloseIcon} />
        </S.MonthYearNavButton>
      </S.CalendarHeader>
      {(dateViewMode === 'month' || dateViewMode === 'year') && (
        <div>
          <SegmentedButton
            css={S.viewModeButtonGroup}
            options={DATE_PICKER_VIEW_MODE_OPTIONS}
            selectedOption={{
              key: dateViewMode,
              label: DATE_PICKER_VIEW_MODE_OPTIONS.filter(
                (viewMode) => viewMode.key === dateViewMode,
              )[0].label,
            }}
            onClick={handleOptionSelect}
          />
          {dateViewMode === 'month' && (
            <S.MonthYearList>
              {Array.from({ length: 12 }, (_, i) => (
                <S.MonthYearItem>
                  <S.MonthButton
                    type="button"
                    isSelected={
                      selectedDate
                        ? selectedDate.isSame(
                            `${initDate.year()}-${i + 1}`,
                            'M',
                          )
                        : false
                    }
                    onClick={handleMonthYearSelect('M', i)}
                  >
                    {i + 1}월
                  </S.MonthButton>
                </S.MonthYearItem>
              ))}
            </S.MonthYearList>
          )}
          {dateViewMode === 'year' && (
            <S.MonthYearList>
              {Array.from({ length: 12 }, (_, i) => (
                <S.MonthYearItem>
                  <S.MonthButton
                    type="button"
                    isSelected={
                      selectedDate
                        ? selectedDate.isSame(`${initDate.year() + i}`, 'y')
                        : false
                    }
                    onClick={handleMonthYearSelect('y', initDate.year() + i)}
                  >
                    {initDate.year() + i}년
                  </S.MonthButton>
                </S.MonthYearItem>
              ))}
            </S.MonthYearList>
          )}
        </div>
      )}
      {dateViewMode === 'date' && (
        <main>
          <S.DateList>
            {['일', '월', '화', '수', '목', '금', '토'].map((day) => (
              <S.Week key={day}>{day}</S.Week>
            ))}
          </S.DateList>
          <S.DateList>
            {dates.map((date) => {
              const isCurrentMonth = initDate.isSame(date, 'M');

              return (
                <S.Date
                  key={date.format('YYYY-MM-DD')}
                  isCurrentMonth={isCurrentMonth}
                  isToday={dayjs().isSame(date, 'D')}
                  isSelected={
                    selectedDate ? selectedDate.isSame(date, 'D') : false
                  }
                >
                  <S.DateButton type="button" onClick={handleDateSelect(date)}>
                    {date.format('D')}
                  </S.DateButton>
                </S.Date>
              );
            })}
          </S.DateList>
        </main>
      )}
    </S.CalendarWrapper>
  );
};

interface DatePickerProps {
  isDisabled?: boolean;
  hasError?: boolean;
  selectedDate: dayjs.Dayjs | null;
  placeholder: string;
  selectDate: (date: dayjs.Dayjs) => void;
}

export const DatePicker = ({
  isDisabled = false,
  hasError = false,
  selectedDate,
  placeholder,
  selectDate,
}: DatePickerProps) => {
  return (
    <Popup
      render={(handlePopupOpenStateChange) => (
        <Calendar
          selectedDate={selectedDate}
          selectDate={selectDate}
          handlePopupOpenStateChange={handlePopupOpenStateChange}
        />
      )}
    >
      <Input
        css={S.datePickerInput}
        isDisabled={isDisabled}
        hasError={hasError}
        isReadOnly
        placeholder={placeholder}
        value={selectedDate ? selectedDate.format('YYYY-MM-DD') : ''}
      />
    </Popup>
  );
};
