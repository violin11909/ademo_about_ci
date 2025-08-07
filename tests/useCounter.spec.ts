import { renderHook, act } from '@testing-library/react-hooks';
import useCounter from '../src/hooks/features/homepage/useCounter';

describe('useCounter', () => {
  it('should initialize count to 0 and val to 1', () => {
    const { result } = renderHook(() => useCounter());
    expect(result.current.count).toBe(0);
    expect(result.current.val).toBe(1);
  });

it('should increment count by val', () => {
  const { result } = renderHook(() => useCounter());

  act(() => {
    result.current.increment(); // count = 1
  });

  // เปลี่ยนค่า val ก่อน แล้วรอให้ React อัปเดต state
  act(() => {
    result.current.setVal(3);
  });

  // แล้วค่อย increment ด้วยค่าใหม่
  act(() => {
    result.current.increment(); // count = 1 + 3 = 4
  });

  expect(result.current.count).toBe(4);
});

});
